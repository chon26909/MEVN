<template>
  <div>
    <div contenteditable="true" class="input-text" @mouseup="selectText">
      ณ ป่าใหญ่แห่งหนึ่ง มีกระต่ายตัวหนึ่งมั่นใจในความเร็วของฝีเท้าตัวเองมาก
      และมักพูดโม้โอ้อวดว่าไม่มีใครเทียบเทียมได้ จนวันหนึ่ง
      เจ้ากระต่ายได้พบกับเต่าที่กำลังเดินต้วมเตี้ยมผ่านมา เมื่อเห็นดังนั้น
      เจ้ากระต่ายก็หัวเราะเยาะและพูดล้อเลียนว่า "นี่เจ้าเต่า
      มัวแต่เดินอืดอาดอย่างนี้ แล้วเมื่อไรจะถึงบ้านกันล่ะเนี่ย
      ต่อให้เจ้าเดินนำหน้าไปก่อนครึ่งวัน ข้ายังตามเจ้าทันเลย555
    </div>
    <div
      class="popper-btn"
      :style="{ top: y + 'px', left: x + 'px', display: displayPopper }"
    >
      <button class="popper-btn-item">ฟังเสียง</button>
      <select class="popper-btn-item">
        <option value="">เสียงผู้ชาย</option>
        <option value="">เสียงผู้หญิง</option>
      </select>
      <select class="popper-btn-item">
        <option value="">x1</option>
        <option value="">x5</option>
        <option value="">x10</option>
      </select>
      <button class="popper-btn-item" @click="createSoundTrack">ตกลง</button>
    </div>
    <img class="img-boss" :src="doc.image" >
  </div>
</template>

<script>
export default {
  data() {
    return {
      x: 0,
      y: 0,
      displayPopper: "none",
      textSelected: "",
      doc: {
        image: "https://i.guim.co.uk/img/media/fe1e34da640c5c56ed16f76ce6f994fa9343d09d/0_174_3408_2046/master/3408.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=0d3f33fb6aa6e0154b7713a00454c83d"
      }
    };
  },
  methods: {
    selectText(event) {
      const t = window.getSelection().toString().trim();     
      if (t) {
        console.log(t);
        this.textSelected = t
        const x = event.pageX;
        const y = event.pageY;
        this.x = x - 303;
        this.y = y - 60;
        return (this.displayPopper = "flex");
      } else {
        return (this.displayPopper = "none");
      }
    },
    createSoundTrack() {
      const sentences = document.getElementsByClassName("input-text");

      const aftercut = sentences[0].lastChild.data.replace(this.textSelected, "");
      sentences[0].lastChild.data = aftercut;

      let span = document.createElement("span");
      span.innerText = this.textSelected;
      span.className = "soundtrack";

      const allNode = sentences[0].childNodes.length;
      sentences[0].insertBefore(span, sentences[0].childNodes[allNode - 1]);

      return this.displayPopper = "none";
    },
  },
};
</script>

<style>
.input-text {
  display: inline-flex;
  flex-wrap: wrap;
  align-content: flex-start;
  justify-content: flex-start;
  line-height: 40px;
  outline: none;
  margin: 50px 0;
  height: 350px;
  padding: 20px;
  border-radius: 10px;
  border: 2px solid #b6dffa;
  box-shadow: 3px 3px 5px rgb(212, 212, 212);
}
.popper-btn {
  width: 300px;
  height: 45px;
  padding: 8px;
  color: #56b8f5;
  background-color: white;
  cursor: pointer;
  border: 1px solid #56b8f5;
  border-radius: 8px;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
  align-items: center;
  justify-content: space-between;
  transition: color 0.2s, background-color 0.2s ease-in-out;
  box-shadow: 2px 1px 3px #a4dafc;
}
.popper-btn-item {
  font-size: 15px;
  padding: 2px 5px;
  background: #effbfe;
  border: 1px solid rgba(1, 193, 251, 0.5);
  box-sizing: border-box;
  border-radius: 5px;
  outline: none;
}
.popper-btn-item:active {
  box-shadow: 1px 1px 3px #b0dffc;
  background-color: #c3e4f8a6;
}
.soundtrack {
  height: 50px;
  background-color: #ceecff;
  padding: 3px 10px;
  margin: 5px 5px 3px 0;
  border: 1px solid #56b8f5;
  border-radius: 5px;
}
</style>
