function helpfn()
{
  console.log('\n')
    console.log(`List of all the commands-
                        1) Tree Command - node fo.js tree <dirname>
                        2) Organize Command - node fo.js organize <dirname>
                        3) Help Command - node fo.js help
                        4) Search Command - node fo.js search <dirname> fileName`);
}

module.exports={
  helpKey : helpfn
}