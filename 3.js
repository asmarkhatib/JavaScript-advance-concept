//  myFunc('khatib'); - > this is function invocation in this example.
const myFunc = (name) => {
    return name;
}

const otherFunc = () => {
    return 'my name is ' + myFunc('khatib');
}