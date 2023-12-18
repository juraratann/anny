// กด + และ - เพื่อเพิ่มและลดทีละ 1
// ตัวเลขสุดที่ 0 และห้ามติดลบ
// กด C จะ reset เลขเป็น 0

// const counter = document.querySelector(".counter");

const numberElement = document.querySelector('.number');
const incButton = document.querySelector('.btn-inc');
const decButton = document.querySelector('.btn-dec');
const clrButton = document.querySelector('.btn-clr');

let count = 0;

incButton.addEventListener('click', () => {
  count++;
  if (count < 0) { 
    count = 0; 
  }
  numberElement.textContent = count;
});

decButton.addEventListener('click', () => {
  count--;
  if (count < 0) {
    count = 0; 
  }
  numberElement.textContent = count;
});

clrButton.addEventListener('click', () => {
  count = 0;
  numberElement.textContent = count;
});