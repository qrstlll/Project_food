const itemsPerPage = 4;
    let items = [
      {
        text: 'Банош з беконом та будзом',
        img: 'https://docs-s2p.s3.eu-west-1.amazonaws.com/menu-prod/dish-84074.jpg?t=1678107918679',
        description: 'Правильний банош на вершках, зі смаженим беконом',
        weight: '350 г',
        price: '189 ₴',
        tags: ['Нове']
      },
      {
        text: 'Chicken Kyiv',
        img: 'https://docs-s2p.s3.eu-west-1.amazonaws.com/menu-prod/dish-212859.jpg?t=1714732883375',
        description: 'Київська класика з молодою картоплею',
        weight: '100 г',
        price: '269 ₴',
        tags: ['Нове']
      },
      {
        text: 'Качина грудка на яблочному пюре з вишневим соусом',
        img: 'https://docs-s2p.s3.eu-west-1.amazonaws.com/menu-prod/dish-634848.jpg?t=1715006713288',
        description: 'Качина грудка готуєтся за технологією сувід, подається на яблучному пюре ',
        weight: '270 г',
        price: '359 ₴',
        tags: ['Нове']
      },
      {
        text: 'Реберця запечені у гостро-солодкому соусі',
        img: 'https://docs-s2p.s3.eu-west-1.amazonaws.com/menu-prod/dish-632453.jpg?t=1715075017567',
        description: 'Ароматні реберця з м\'яса свинини запечені в гостро-солодкому соусі ',
        weight: '300 г',
        price: '389 ₴',
        tags: ['Гостре', 'Нове']
      },{
        text: 'Помаранчева кава',
        img: 'https://docs-s2p.s3.eu-west-1.amazonaws.com/menu-prod/dish-98349.jpg?t=1681219007887',
        description: 'Помаранчовий фреш,допіо,цукор',
        weight: '325 мл',
        price: '129 ₴',
        tags: ['Нове']
      },
      {
        text: 'Еспресо фреш',
        img: 'https://docs-s2p.s3.eu-west-1.amazonaws.com/menu-prod/dish-98350.jpg?t=1681219037862',
        description: 'Еспресо,живчик лимонний',
        weight: '350 мл',
        price: '89 ₴',
        tags: ['Нове']
      },
      {
        text: 'Цитрусовий лимонад',
        img: 'https://docs-s2p.s3.eu-west-1.amazonaws.com/menu-prod/dish-98379.jpg?t=1681220365176',
        description: 'Помаранчовий фреш,фреш грейфруту,фреш лимону',
        weight: '400 мл',
        price: '89 ₴',
        tags: ['Популярне', 'Нове']
      },
      {
        text: 'Молочний коктейль',
        img: 'https://docs-s2p.s3.eu-west-1.amazonaws.com/menu-prod/dish-567672.jpg?t=1712585436135',
        weight: '350 мл',
        price: '119 ₴',
        tags: ['Популярне']
      },{
        text: 'Камамбер з ягідним соусом',
        img: 'https://docs-s2p.s3.eu-west-1.amazonaws.com/menu-prod/dish-106696.jpg?t=1714731666617',
        description: 'Український камамбер з ягідним соусом по сезону',
        weight: '200 г',
        price: '199 ₴',
        tags: ['Нове', 'Популярне']
      },
      {
        text: 'Шоколадний медовик з вершковим кремом',
        img: 'https://docs-s2p.s3.eu-west-1.amazonaws.com/menu-prod/dish-632475.jpg?t=1714732197032',
        description: 'Шоколадно-медові коржі, сметанний крем, шоколадний ганаш',
        weight: '125 г',
        price: '179 ₴',
        tags: ['Нове']
      },
      {
        text: 'Київський торт',
        img: 'https://docs-s2p.s3.eu-west-1.amazonaws.com/menu-prod/dish-84081.jpg?t=1708693307919',
        description: 'Білкові коржі з лісовим горіхом, какао, масло вершкове, жовток яєчний, ваніль',
        weight: '125 г',
        price: '179 ₴',
        tags: ['Нове']
      },
      {
        text: 'Локальні цукерки 4штуки з делікатесними сирами',
        img: 'https://docs-s2p.s3.eu-west-1.amazonaws.com/menu-prod/dish-160624.jpg?t=1707225326550',
        weight: '4 шт',
        price: '199 ₴',
        tags: ['Нове']
      },{
        text: 'Брют Рожеве ',
        img: 'https://docs-s2p.s3.eu-west-1.amazonaws.com/menu-prod/dish-282846.jpg?t=1712930287693',
        description: 'Смак злагоджений, збалансований з приємним післясмаком',
        weight: '750 мл',
        price: '620 ₴',
        tags: ['Нове']
      },
      {
        text: 'Брют Біссер',
        img: 'https://docs-s2p.s3.eu-west-1.amazonaws.com/menu-prod/dish-84099.jpg?t=1712930225008',
        description: 'Смак м\'яка і освіжаюча смакова композиція ',
        weight: '750 мл',
        price: '1100 ₴',
        tags: ['Нове']
      },
      {
        text: 'Артанія',
        img: 'https://docs-s2p.s3.eu-west-1.amazonaws.com/menu-prod/dish-280312.jpg?t=1712930582608',
        description: 'Смак надзвичайно свіжий, багатий, з гарним балансом',
        weight: '750 мл',
        price: '790 ₴',
        tags: ['Нове']
      },
      {
        text: 'Бейкуш',
        img: 'https://docs-s2p.s3.eu-west-1.amazonaws.com/menu-prod/dish-405657.jpg?t=1712930685535',
        description: 'Смак свіжий, привабливий, округлий, із чудовою структурою',
        weight: '750 мл',
        price: '760 ₴',
        tags: ['Нове']
      },{
        text: 'П\'яний борщ',
        img: 'https://docs-s2p.s3.eu-west-1.amazonaws.com/menu-prod/dish-98346.jpg?t=1691390010245',
        description: 'Копчена горілка, медовий сироп, цитриновий фреш, овочевий сік',
        weight: '240 мл',
        price: '249 ₴',
        tags: ['Нове', 'Популярне']
      },
      {
        text: 'Cокира',
        img: 'https://docs-s2p.s3.eu-west-1.amazonaws.com/menu-prod/dish-567656.jpg?t=1712582947145',
        description: 'З додаванням цибулі, солоного огірка та часничку',
        weight: '120 мл',
        price: '249 ₴',
        tags: ['Нове']
      },
      {
        text: 'Світован',
        img: 'https://docs-s2p.s3.eu-west-1.amazonaws.com/menu-prod/dish-567651.jpg?t=1712582364457',
        description: 'Грейпфрутова горілка,апельсиновий сік,аперитив ,лимон,білок,цукор,кориця',
        weight: '200 мл',
        price: '249 ₴',
        tags: ['Нове']
      },
      {
        text: 'Чорт',
        img: 'https://docs-s2p.s3.eu-west-1.amazonaws.com/menu-prod/dish-567659.jpg?t=1712583190691',
        description: 'Українська текіла ,лікер тріпл сек,лимон,цукор та червоне вино',
        weight: '165 мл',
        price: '249 ₴',
        tags: ['Нове']
      },{
        text: 'Бургер з подвійною котлетою із мармурової яловичини',
        img: 'https://docs-s2p.s3.eu-west-1.amazonaws.com/menu-prod/dish-84064.jpg?t=1678107909914',
        description: 'Дві соковиті котлети з української мармурової яловичини, салат айсберг, свіжі томати, маринована цибуля,чеддер, секретний соус до бургера, булочка бріош. ',
        weight: '300 г',
        price: '259 ₴',
        tags: ['Нове', 'Популярне']
      },
      {
        text: 'Сендвіч з пастрамі та червоною капустою',
        img: 'https://docs-s2p.s3.eu-west-1.amazonaws.com/menu-prod/dish-632448.jpg?t=1714730848992',
        description: 'Пастрамі (солонина) власного приготування, червона капуста, гірчиця, житній хліб. ',
        weight: '300 г',
        price: '269 ₴',
        tags: ['Гостре', 'Нове']
      },
      {
        text: 'Копчена ципа з медом',
        img: 'https://docs-s2p.s3.eu-west-1.amazonaws.com/menu-prod/dish-632454.jpg?t=1714731177205',
        description: 'Власного копчення , подається з соусом з хріну та меду',
        weight: '100 г',
        price: '159 ₴',
        tags: ['Гостре', 'Нове']
      },
      {
        text: 'Вареники з вишнею',
        img: 'https://docs-s2p.s3.eu-west-1.amazonaws.com/menu-prod/dish-84055.jpg?t=1678107900909',
        description: 'Подаємо з соусом зі сметани і згущеного молока',
        weight: '130 г',
        price: '139 ₴',
        tags: ['Нове']
      }
    ];
    
    let filteredItems = items;
    let currentEditingItem = null;
    let currentPage = 1;
    let sortOrder = 'none';
    const buttonNames = ["Food", "Drinks", "Deserts", "Wine Map", "Cocktails", "Dinners"]; 

    function renderPagination() {
      const paginationContainer = document.getElementById('pagination');
      paginationContainer.innerHTML = '';
      const pageCount = Math.ceil(filteredItems.length / itemsPerPage);

      for (let i = 1; i <= pageCount; i++) {
        const button = document.createElement('button');
        button.textContent = buttonNames[i - 1] || `Page ${i}`; 
        button.onclick = () => {
          currentPage = i;
          renderItems(i);
        };
        paginationContainer.appendChild(button);
      }
    }

    function renderItems(page) {
      currentPage = page;
      const start = (page - 1) * itemsPerPage;
      const end = start + itemsPerPage;

      let itemsToRender = filteredItems.slice(start, end);

    
      if (sortOrder === 'asc') {
        itemsToRender.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
      } else if (sortOrder === 'desc') {
        itemsToRender.sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
      }

      const itemsContainer = document.getElementById('items');
      itemsContainer.innerHTML = '';

      itemsToRender.forEach((item, index) => {
        const div = document.createElement('div');
        div.className = 'item';
        div.innerHTML = `
          <img src="${item.img}" alt="Image">
          <div class="item-details">
            <p class="item-title">${item.text}</p>
            <p class="item-price">${item.price}</p>
            <p class="item-description">${item.description}</p>
            <p class="item-weight">${item.weight}</p>
            <div class="item-tags">
              ${item.tags.map(tag => `<span>${tag}</span>`).join('')}
            </div>
          </div>
          <button class="editbut" onclick="openEditModal(${start + index})">Edit</button>
          <button class="deletebut" onclick="deleteItem(${start + index})">Delete</button>
        `;
        itemsContainer.appendChild(div);
      });
    }

    function deleteItem(index) {
      items.splice(index, 1);
      filteredItems = items;
      renderItems(currentPage);
      renderPagination();
    }

    function openEditModal(index) {
      currentEditingItem = index;
      const item = items[index];

      document.getElementById('editText').value = item.text;
      document.getElementById('editImage').value = item.img;
      document.getElementById('editDescription').value = item.description;
      document.getElementById('editWeight').value = item.weight;
      document.getElementById('editPrice').value = item.price;
      document.getElementById('editTags').value = item.tags.join(', ');

      const modal = document.getElementById('editModal');
      modal.style.display = 'block';
    }

    document.querySelector('#editModal .close').onclick = function() {
      const modal = document.getElementById('editModal');
      modal.style.display = 'none';
    }

    document.querySelector('#addCardModal .close').onclick = function() {
      const modal = document.getElementById('addCardModal');
      modal.style.display = 'none';
    }

    document.getElementById('saveButton').onclick = function() {
      const editText = document.getElementById('editText').value;
      const editImage = document.getElementById('editImage').value;
      const editDescription = document.getElementById('editDescription').value;
      const editWeight = document.getElementById('editWeight').value;
      const editPrice = document.getElementById('editPrice').value;
      const editTags = document.getElementById('editTags').value.split(',').map(tag => tag.trim());

      items[currentEditingItem] = {
        text: editText,
        img: editImage,
        description: editDescription,
        weight: editWeight,
        price: editPrice,
        tags: editTags
      };

      const modal = document.getElementById('editModal');
      modal.style.display = 'none';
      renderItems(currentPage);
    }

    document.getElementById('addCardSaveButton').onclick = function() {
      const newCardText = document.getElementById('newCardText').value;
      const newCardImage = document.getElementById('newCardImage').value;
      const newCardDescription = document.getElementById('newCardDescription').value;
      const newCardWeight = document.getElementById('newCardWeight').value;
      const newCardPrice = document.getElementById('newCardPrice').value;
      const newCardTags = document.getElementById('newCardTags').value.split(',').map(tag => tag.trim());

      items.splice((currentPage - 1) * itemsPerPage, 0, {
        text: newCardText,
        img: newCardImage,
        description: newCardDescription,
        weight: newCardWeight,
        price: newCardPrice,
        tags: newCardTags
      });

      filteredItems = items;
      renderItems(currentPage);
      renderPagination();

      const modal = document.getElementById('addCardModal');
      modal.style.display = 'none';
    }

    window.onclick = function(event) {
      if (event.target.classList.contains('modal')) {
        event.target.style.display = 'none';
      }
    }

    document.getElementById('searchInput').oninput = function(event) {
      const query = event.target.value.toLowerCase();
      filteredItems = items.filter(item => item.text.toLowerCase().includes(query));
      renderItems(1);
      renderPagination();
    };

    document.getElementById('addCardButton').onclick = function() {
      const modal = document.getElementById('addCardModal');
      modal.style.display = 'block';
    };

    document.getElementById('sortPrice').onchange = function(event) {
      sortOrder = event.target.value;
      renderItems(currentPage);
    };

    renderPagination();
    renderItems(1);
