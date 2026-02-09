import { createSourceFile, isExportAssignment, isTypeAliasDeclaration, isTypeOnlyExportDeclaration, isTypeParameterDeclaration, JSDoc, ScriptTarget, Statement, SyntaxKind } from 'typescript';
import { readdir } from "node:fs/promises";
import { mkdir } from 'node:fs/promises';

const TARGET_AUTOGEN_TEST_FOLDER = "./src-tests"

const modules_to_test = [
    'assert',
    'class',
    'condition',
    'constraint',
    'functional',
    'guard',
    'list',
    'merge',
    'object',
    'primitive',
    'transform',
    'tuple',
    'union',
    'util',
] as const

async function main(){
    let exists = false;
    try{
        await readdir(TARGET_AUTOGEN_TEST_FOLDER);
        exists = true;
    } catch{ }
    if (!exists){
        console.log(`Creating folder: ${TARGET_AUTOGEN_TEST_FOLDER} to handle all autogen creation`)
        await mkdir(TARGET_AUTOGEN_TEST_FOLDER)
    }

    for (const module_name of modules_to_test){
        const module_folder_path = get_module_folder_path(module_name)
        let exists = false;
        try{
            await readdir(module_folder_path);
            exists = true;
        } catch{ }
        if (! exists){
            console.log(`Creating folder: ${module_folder_path} for module: ${module_name}`)
            await mkdir(module_folder_path)
        }

        const file_path_d_ts = `./devtypes/types/${module_name}.d.ts`
        let file = Bun.file(file_path_d_ts)
        if (! await file.exists()){
            const file_path_ts = `./devtypes/types/${module_name}.ts`
            file = Bun.file(file_path_ts)
        }
        const text = await file.text()
        const source_file = createSourceFile('_types.ts', text , ScriptTarget.ES2015);
        
        source_file.statements.forEach(x => on_statement(x, module_name))
    }
}

main()


function get_module_folder_path(module_name: string): string{
    return `${TARGET_AUTOGEN_TEST_FOLDER}/${module_name}`
}


function get_jsdoc_out_of_statement(statement: Statement): JSDoc | undefined{
    if ('jsDoc' in statement){
        const js_docs = statement.jsDoc as JSDoc[]
        if (js_docs.length === 0)
            return
        // picks only the last because some comments
        // are about the file data
        return js_docs.slice(-1)[0]
    }
}

function get_jsdoc_example_tags(js_doc: JSDoc | undefined): string | undefined{
    if (js_doc === undefined) return
    const tags = js_doc.tags
    if (!tags) return
    /* for (const tag in tags){
        return tag
    } */
    for (const tag of tags){
        const tag_name = tag.tagName.escapedText as string
        if (tag_name === 'example')
            return tag.comment?.toString()
    }
}

async function on_statement(statement: Statement, module_name: string){
    try{
        if (isTypeAliasDeclaration(statement) && statement.modifiers?.some(modifier => modifier.kind === SyntaxKind.ExportKeyword)) {
            // getText() requires the source file so I rather do this unsafe thing that just works
            const type_name = statement.name.escapedText as string
            const js_doc = get_jsdoc_out_of_statement(statement)
            const examples = get_jsdoc_example_tags(js_doc)
            //console.log(examples, `${module_name}/${type_name}`)
            await setup_default_test_file(module_name, type_name, examples)
        }
    } catch(e){
        console.error(e)   
    }
}


async function setup_default_test_file(module_name: string, type_name: string, examples: string){
    const module_folder_path = get_module_folder_path(module_name)
    const type_test_file_path = `${module_folder_path}/${type_name}.ts`
    if (! await Bun.file(type_test_file_path).exists()){
        console.log(`Creating file ${type_test_file_path} for module ${module_name} and type: ${type_name}`)
        await write_default_file(module_name, type_name, type_test_file_path, examples)
    }
    
}

async function write_default_file(module_name: string, type_name: string, file_path: string, examples: string): Promise<number> {
    const text = `\
import type {${type_name}} from "@devtypes/${module_name}"
// Examples automatically extracted from the documentation.
${examples}
// Manually written content.
`
    return Bun.write(file_path, text)
}