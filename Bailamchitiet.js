const caudung = document.getElementById("caudung");
    const tongcau = document.getElementById("tongcau");
    const diem = document.getElementById("diem");
    const List = document.getElementById("List");
    const Dung = 4;
    const Tong = 5;
    const Diem= (Dung / Tong) * 10;
    caudung.textContent = Dung;
    tongcau.textContent = Tong;
    diem.textContent = Diem;
    
    for (let i = 0; i < Tong; i++) {
      const answer = document.createElement("li");
      answer.classList.add("answer");
      
      answer.innerHTML = `Câu hỏi ${i + 1}: <strong>Đáp án của bạn</strong>`;
      
      if (i < Dung) {
        answer.classList.add("correct");
      } else {
        answer.classList.add("incorrect");
      }
      
      List.appendChild(answer);
    }

    const thacmac = document.getElementById("thacmac");
    thacmac.addEventListener("click", () => {
      
      alert("Yêu cầu đã được gửi đến giáo viên");
    });