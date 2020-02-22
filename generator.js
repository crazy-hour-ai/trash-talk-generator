const task = {
  engineer: ['加個按鈕', '加新功能', '切個版', '改一點 code'],
  designer: ['畫一張圖', '改個 logo', '順便幫忙設計一下', '隨便換個設計'],
  entrepreneur: ['週末加班', '要能賺錢', '想個 business model', '找 VC 募錢']
}

const phrase = ['很簡單', '很容易', '很快', '很正常']

const target = ['engineer', 'designer', 'entrepreneur'];

function generator(job) {

  let taskIndex = Math.floor(Math.random() * 4);
  let phraseIndex = Math.floor(Math.random() * 4);

  if (!job) {
    return '忘了選嗎？'
  }

  const message = '身為一個' + job + task[job][taskIndex] + phrase[phraseIndex]

  console.log('words', message);
  return message;

  // let collection = '';
  // Object.keys(task)
  //   ((Object.keys(task)).forEach((key) => {
  //     console.log(task[key]);
  //   })
}
// generator(target[0]);
module.exports = generator;