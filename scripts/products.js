new Vue({
  el: "#products",
  data() {
    return {
      products: [
        {
          name: "どこでもドア",
          eng_name: "Everywhere Door",
          discription: "ドアのノブに意志読み取りセンサーが組み込まれているため、場所の指定は「いつもの空き地」と言えば野比家の近所の空き地になったり、「どこでもいいから遠く」と言えば適当な場所になるなど、曖昧な指定が可能。また、のび太がしずかの家へ行こうとすれば、のび太の気持ちが読み取られて行き先が風呂場になったりもする。",
          image: "../images/door.jpg"
        },
        {
          name: "透明マント",
          eng_name: "Invisible Cloak",
          discription: "このマントを身に纏った者の姿は完全に透明となり、他人が姿を確認する事ができなくなる。",
          image: "../images/cloak.jpg"
        },
        {
          name: "悪魔の実",
          eng_name: "Devil Fruits",
          discription: "悪魔の実は「海の悪魔の化身」と言われる果実で、食べた者は特殊な能力が身に付く。実を一口でもかじると、その時点で食べた者に能力が発現し、残りの実はただの果実となる。味は非常に不味い。",
          image: "../images/fruits.jpg"
        }
      ]
    }
  }
})