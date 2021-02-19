import {apply, applyTemplates, mergeWith, Rule, Tree, url} from '@angular-devkit/schematics';

interface Options {
  name: string;
}

export function simple(options: Options) {
  return (tree: Tree) => {
    tree.create('hello.txt', `Hi ${options.name}! How are you?`);
    return tree;
  }
}

export function advanced(options: Options): Rule {
  const source = apply(url('./templates'), [
    applyTemplates({
      name: options.name,
    }),
  ]);
  return mergeWith(source);
}
