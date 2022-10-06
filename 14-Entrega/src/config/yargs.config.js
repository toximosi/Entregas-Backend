import yargs from 'yargs';

const yargsInstance = yargs(process.argv.slice(2)).default({
    m:'prod',
    p: 8080,
    d: false
}).alias({
    m: 'MODE',
    p: 'PORT',
    d: 'DEBUG'
});

const args = yargsInstance.argv;

const config = {
    port: args.PORT,
    others: args._
};

export default config