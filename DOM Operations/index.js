// let a=document.createElement('p');
// a.textContent="This is the inserted paragraph";      // adding content to the created element
// let box=document.querySelector('.box');              // selects first element having corresponding class,id,element tag
// // cont.appendChild(a);                              // for inserting created element at the end

//for element insertions at specific positions

// // cont.insertAdjacentElement('beforebegin',a);
// // cont.insertAdjacentElement('beforeend',a);
// box.insertAdjacentElement('afterbegin',a);
// box.insertAdjacentElement('afterend',a);

// let para1=document.querySelector('#para1');
// let container=document.querySelector('#cont1');

// container.removeChild(para1)                         //removing child using both parent and child

// let a=document.querySelector('#para2');
// let parent=a.parentElement;
// parent.removeChild(a);

// a.remove();                                         //removing only using child element

if (a) {
  a.remove();                                          // if a is not present then the file will crash , hence this checks availabilty of the 'a' element brfore the removal
}
