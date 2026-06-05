// Coffee catalogue. The first six fields (name, price, image, description,
// tastingNotes, roast) are ported verbatim from the original coffee.html.
// origin / region / story / historicPhoto are NEW — they power the selectable
// "coffee story" modal. historicPhoto reuses fitting in-repo imagery styled
// sepia; swap in real archival photographs any time without code changes.

export const coffees = [
  {
    id: 'colombian',
    name: 'Single Origin Colombian',
    price: 19.99,
    image: 'images/single_originColombian.jpg',
    description:
      'Grown in the high Andes, this coffee is famous for its rich, mild flavor. It delivers a perfect balance of acidity and body.',
    tastingNotes: 'Caramel, Dried Fruit, Citrus',
    roast: 'Medium Roast',
    origin: 'Colombia',
    region: 'High Andes — Huila & Nariño',
    story:
      'Carried up the misty slopes of the Andes by generations of smallholder families, Colombian coffee became the country’s heartbeat in the 19th century. Each cherry is still hand-picked along steep volcanic ridges, where cool nights slow the ripening and concentrate that signature sweetness. This is the bean that built a culture of careful, proud cultivation.',
    historicPhoto: 'images/coffee_beans.jpg',
  },
  {
    id: 'world',
    name: 'Single Origin World',
    price: 19.99,
    image: 'images/single_originWorld.jpg',
    description:
      'A carefully curated selection of the finest beans from around the globe, brought together for a complex and worldly experience.',
    tastingNotes: 'Berries, Chocolate, Spices',
    roast: 'Medium-Dark Roast',
    origin: 'Around the Globe',
    region: 'The Coffee Belt',
    story:
      'Coffee’s journey spans continents — from Ethiopian forests to Caribbean plantations and beyond. This blend honors that voyage along the equatorial "coffee belt", uniting beans whose ancestors crossed oceans aboard trading ships. A cup that tastes like the whole travelling history of the bean.',
    historicPhoto: 'images/coffee_on_table.jpg',
  },
  {
    id: 'bone',
    name: 'Single Origin Bone',
    price: 19.99,
    image: 'images/single_originBone.jpg',
    description:
      'A bold and intense coffee with a strong character. Perfect for those who need a serious wake-up call.',
    tastingNotes: 'Earthy, Dark Cocoa, Smoky',
    roast: 'Dark Roast',
    origin: 'Highland Estates',
    region: 'Volcanic Highlands',
    story:
      'Dark, brooding and unapologetic, this roast traces the old tradition of roasting beans long and deep over open flame — a method born when fire was the only tool a roaster had. The result is a smoky, bone-deep intensity that hearkens back to the earliest campfire brews.',
    historicPhoto: 'images/coffee_beans2.jpg',
  },
  {
    id: 'brazil',
    name: 'Single Origin Brazil',
    price: 19.99,
    image: 'images/single_originBRAZIL.jpg',
    description:
      'Classic Brazilian coffee known for its creamy body and low acidity. A comforting cup that pairs perfectly with breakfast.',
    tastingNotes: 'Peanut Butter, Milk Chocolate',
    roast: 'Medium Roast',
    origin: 'Brazil',
    region: 'Minas Gerais',
    story:
      'By the 1840s Brazil had become the largest coffee grower on earth, its rolling red-earth fazendas exporting beans to every corner of the world. That heritage of abundance gives Brazilian coffee its famously smooth, nutty, everyday-drinkable character — the comforting cup the world grew up on.',
    historicPhoto: 'images/coffee_cup_on_wooden_board.jpg',
  },
  {
    id: 'brazilian',
    name: 'Single Origin Brazilian',
    price: 19.99,
    image: 'images/single_originBrazilian.jpg',
    description:
      'Taking the classic Brazilian bean to a darker level. It offers a deeper, more toasted flavor profile without the bitterness.',
    tastingNotes: 'Toasted Hazelnut, Dark Chocolate',
    roast: 'Dark Roast',
    origin: 'Brazil',
    region: 'Sul de Minas',
    story:
      'A darker tribute to Brazil’s roasting houses, where master roasters learned to coax toasted, chocolatey depth from the bean without tipping into bitterness. It is the evening counterpart to its medium-roast sibling — the same proud lineage, dressed for the night.',
    historicPhoto: 'images/coffee_maple.jpg',
  },
  {
    id: 'peruvian',
    name: 'Single Origin Peruvian',
    price: 19.99,
    image: 'images/single_originPeruvian.jpg',
    description:
      'Harvested from the mystic mountains of Peru. This organic coffee is smooth, aromatic, and environmentally friendly.',
    tastingNotes: 'Floral, Herbal, Sweet Citrus',
    roast: 'Light-Medium Roast',
    origin: 'Peru',
    region: 'Cajamarca & Cusco',
    story:
      'Grown by indigenous cooperatives high in the Peruvian Andes, often in the shade of the cloud forest, this coffee carries centuries of mountain stewardship. Organic by tradition long before it was a label, every bag supports the same highland communities that have tended these terraces for generations.',
    historicPhoto: 'images/green_coffee_cup.jpg',
  },
  {
    id: 'sumatra',
    name: 'Single Origin Sumatra',
    price: 19.99,
    image: 'images/single_originSumatra.jpg',
    description:
      'From the Indonesian islands, Sumatra coffee is unique for its full body and low acidity. A favorite for coffee lovers who like it thick.',
    tastingNotes: 'Cedar, Tobacco, Spicy',
    roast: 'Dark Roast',
    origin: 'Indonesia',
    region: 'Sumatra — Gayo Highlands',
    story:
      'Dutch traders brought coffee to the Indonesian archipelago in the 1600s, and Sumatra answered with a bean unlike any other. Its distinctive "wet-hulled" Giling Basah processing — a local innovation born of the island’s humid climate — gives Sumatran coffee its legendary heavy body and earthy, spicy soul.',
    historicPhoto: 'images/coffee_beans.jpg',
  },
  {
    id: 'violent-colombia',
    name: 'Single Origin Violent Colombia',
    price: 19.99,
    image: 'images/single_originViolentColombia.jpg',
    description:
      'An extra-strong version of our Colombian classic. High caffeine content and bold flavors for the adventurous drinker.',
    tastingNotes: 'Intense Dark Chocolate, Cherry, Smoke',
    roast: 'Extra Dark Roast',
    origin: 'Colombia',
    region: 'High Andes — Reserve Lots',
    story:
      'Our boldest expression of the Colombian harvest: reserve-lot beans pushed to an extra-dark roast for drinkers who want every ounce of intensity. It channels the raw energy of the mountain harvest — a fearless, full-throttle cup with cherry and smoke crashing over deep dark chocolate.',
    historicPhoto: 'images/coffee_on_table.jpg',
  },
]

// Historic photo gallery — "The History of the Bean". Reuses in-repo imagery
// styled sepia in the UI; captions tell the broader coffee-heritage story.
export const historicGallery = [
  {
    id: 'h1',
    image: 'images/coffee_beans.jpg',
    title: 'From Forest to Cup',
    caption:
      'Wild coffee was first cultivated over a thousand years ago, spreading from highland forests to the wider world.',
  },
  {
    id: 'h2',
    image: 'images/coffee_on_table.jpg',
    title: 'The Coffee House Era',
    caption:
      'By the 1600s, coffee houses had become the gathering places where ideas, trade and culture were brewed together.',
  },
  {
    id: 'h3',
    image: 'images/coffee_cup_on_wooden_board.jpg',
    title: 'Crossing the Oceans',
    caption:
      'Carried across the seas by traders, the bean took root in the tropics — from the Americas to the Caribbean isles.',
  },
  {
    id: 'h4',
    image: 'images/coffee_maple.jpg',
    title: 'The Modern Roast',
    caption:
      'Today’s single-origin movement returns to the source — honoring the farmers and terroir behind every cup.',
  },
]
