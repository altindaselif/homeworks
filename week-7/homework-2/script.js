const menu = [
    {
      id: 1,
      title: "Vegetable Noodle",
      category: "NOODLE",
      price: 5.99,
      img:
        "./media/image/VegetableNoodle.jpg",
      desc: `Broccoli, Green Onion, Mushroom.`,
    },
    {
      id: 2,
      title: "Beef Noodle",
      category: "NOODLE",
      price: 8.99,
      img:
        "./media/image/BeefNoodle.jpg",
      desc: `Broccoli, Green Onion, Mushroom, Beef. `,
    },
    {
      id: 3,
      title: "Chicken Noodle",
      category: "NOODLE",
      price: 7.99,
      img:
        "./media/image/ChickenNoodle.jpg",
      desc: `Broccoli, Green Onion, Mushroom, Chicken.`,
    },
    {
      id: 4,
      title: "Chicken Manchurian",
      category: "CHICKEN",
      price: 10.99,
      img:
        "./media/image/ChickenManchurian.jpg",
      desc: `Bell Pepper, Onion, Almonds, Chicken.`,
    },
    {
      id: 5,
      title: "General Tso's Chicken",
      category: "CHICKEN",
      price: 11.99,
      img:
        "./media/image/GeneralTsosChicken.jpg",
      desc: `Special Sauce, Sesame, Chicken.`,
    },
    {
      id: 6,
      title: "Beef Kung Pao",
      category: "BEEF",
      price: 13.99,
      img:
        "./media/image/BeefKungPao.jpg",
      desc: `Hot Pepper, Green Onion, Peanuts, Beef`,
    },
    {
      id: 7,
      title: "Szechuan Beef",
      category: "BEEF",
      price: 12.99,
      img:
        "./media/image/SzechuanBeef.jpg",
      desc: `Szechuan Sauce, Green Onion, Onion, Beef`,
    },
    {
      id: 8,
      title: "Plain Rice",
      category: "RICE",
      price: 3.99,
      img:
        "./media/image/PlainRice.jpg",
      desc: `Steam Cooked Plain Rice.`,
    },
    {
      id: 9,
      title: "Vegetable Rice",
      category: "RICE",
      price: 4.99,
      img:
        "./media/image/VegetableRice.jpg",
      desc: `Steam Cooked Plain Rice, Peas, Carrot.`,
    },
    {
      id: 10,
      title: "Fried Banana",
      category: "DESSERT",
      price: 8.99,
      img:
        "./media/image/FriedBanana.jpg",
      desc: `Fried Banana.`,
    },
    {
      id: 11,
      title: "Fried Pineapple",
      category: "DESSERT",
      price: 9.99,
      img:
        "./media/image/FriedPineapple.jpg",
      desc: `Fried Pineapple.`,
    },
  ];


  const buttons = document.querySelector(".buttons");
  const itemsize = document.querySelector(".itemsize");

  const categories = menu.reduce((values, items) => {
    if (!values.includes(items.category)) {
        values.push(items.category);
    }
    return values;
  },["ALL"],);

  const btnCategories = categories.map((category) => {
    return `<button type = "button" class="buttonstyle" data-id = ${category}> ${category}`;
  }).join("");

  console.log("btnCategories :", btnCategories);
  buttons.innerHTML = btnCategories;

  const allBtn=document.querySelectorAll(".buttonstyle");


  allBtn.forEach((button) => {
    button.addEventListener("click", (event) => {
      const btnCategory=event.currentTarget.dataset.id;
      console.log("btnCategory :", btnCategory);
      const menuCategoryItem = menu.filter((item) => {
        if (item.category === btnCategory) {
          return item;
        }
      });
      if (btnCategory === "ALL") {
        menuList(menu);
      } else {
        menuList(menuCategoryItem);
      }
    });
  });

  const menuList = (menuItems) => {
    const menuDisplay = menuItems.map ((item) => {
      return `
      <div class="menu-items">
          <img class="photo" src=${item.img} alt=${item.title}>
          <div class="menu-info">
            <div class="menu-title">${item.title}</div>
            <div class="price">${item.price}</div>
            <div class="menu-text">${item.desc}</div>
          </div>
      </div>
      `;
    }).join("");
    itemsize.innerHTML = menuDisplay;
  };
 menuList(menu);
