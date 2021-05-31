const $ = (selector) => document.querySelector(selector)
const $inputNew = $('.new-todo'); 
const $items = $('.todo-list');
// 클릭 이벤트가 발생했을 때 onAddStationHandler함수가 실행되도록 바인딩 한다.
//$inputNewTodo.addEventListener('click', onAddStationHandler); 

function onAdd (){

  const $text = $inputNew.value;
  const $item = createItem( $text);
  $items.appendChild($item);

  $inputNew.value='';
  $inputNew.focus();

}

let $id=0; //아이템별 고유번호 부여
let status='default'
function createItem($text){
  const itemRow = document.createElement('li');
  itemRow.setAttribute('class', 'default');
  itemRow.setAttribute('data-id', $id);
  itemRow.innerHTML = `
    <div class="view">
      <input class="toggle" type="checkbox" data-id=${$id} />
      <label class="label">${$text}</label>
      <button class="destroy" data-id=${$id}></button>
    </div>
    <input class="edit" value=${$text} />
  `;
$id++;
return itemRow;
}

$inputNew.addEventListener('keypress',event=>{
  if(event.key ==='Enter'){
    onAdd();
  }
$items.addEventListener('click', event =>{
  const id = event.target.dataset.id;
  if(id){

  }
})
})