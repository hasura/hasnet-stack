#!/bin/env node

const { Command } = require('commander');
const program = new Command();

program
  .name('hasnet')
  .description('CLI for the HasNeT stack')
  .version('0.1.0'); // TODO: get this from package.json file

program.command('init')
  .description('initialize the hasnet-stack in current diectory')
  .action(() => {
    console.log('hasnet-stack will be initialized here')
  });

program.parse();