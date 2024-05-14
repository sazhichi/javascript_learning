let list = document.querySelectorAll('.output ul');

list.innerHTML = "";
var stations = ['MAN675847583748sjt567654;Manchester Piccadilly',
                'GNF576746573fhdg4737dh4;Greenfield',
                'LIV5hg65hd737456236dch46dg4;Liverpool Lime Street',
                'SYB4f65hf75f736463;Stalybridge',
                'HUD5767ghtyfyr4536dh45dg45dg3;Huddersfield'];

for(let i = 0; i < stations.length; i++){
    let input = stations[i];
    let code = input.slice(0, 3);
    let idx = input.indexOf(';');
    let messgae = input.slice(idx);
    let final = code + ':' + messgae;
    let result = final;
    let listItem = document.createElement('li');
    listItem.textContent = result;
    list.appendChild(listItem);
}                