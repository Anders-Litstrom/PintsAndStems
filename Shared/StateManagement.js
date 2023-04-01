import React from 'react'
import { Realm, useApp } from '@realm/react'

const appId = 'pintsandstems-iuaox';
				
const AuthContext = React.createContext();
const AuthContextProvider = ({ children }) => {
	const [auth, setAuth] = React.useState({
		isAuthenticated: false,
		user: null,
		token: null
	});

	return(
		<AuthContext.Provider value={{ auth, setAuth }}>
			{children}
		</AuthContext.Provider>
	);
}

const BevContext = React.createContext();
const BevContextProvider = ({ children }) => {
	const [wine, setWine] = React.useState([{name: 'Shafer 2018 Chardonnay', id:'1', description:"Celebrating the 25th vintage of Chardonnay from their beautiful 70 acre Red Shoulder Ranch vineyard in Napa Valley’s Carneros District. Year after year this estate vineyard offers up wine with plush, exotic, zesty aromas and flavors. Carefully selected, small-cluster Chardonnay clones were planted and since the first vintage this wine has been a standout among California Chards. It's always fermented using only wild yeasts, 75% in barrel and 25% in stainless steel tanks. This 2018 aged 14 months in 75% new French oak barrels (Allier, Vosges) and 25% in stainless steel barrels. Since it undergoes no malolactic fermentation this Chardonnay retains a lively natural acidity.'", price:'54.95', image:'https://wineexpress.scene7.com/is/image/WineExpress/t/200//522017618_2.jpg' },
    	{name: 'Castello Monaci 2019 Kreos', id:'2', description:'The Castello Monaci Kreos Rosato comes from the heart of Italy’s rose production region of Apulia. The vineyards of this hot, arid region are made up of dry gravelly soils of limestone and clay forcing the vines deep for nourishment and leading to very low yields and concentrated wines.This 100% Negroamaro is made in the “saignée method” which removes the juice from the skins after just a enough contact to impart a rich pink color and clean berry flavor. Wine Enthusiast magazine scored this 90 points saying "This blend of Cabernet Sauvignon, Merlot and Syrah opens with aromas of cassis, underbrush and tobacco. The savory, balanced palate offers blackberry, clove and white pepper alongside polished tannins. Drink through 2025."Wine Enthusiast Magazine awarded this a "Best Buy" and scored it 90 points saying "This saignée of Negroamaro offers pretty aromas of grapefruit, white flowers and strawberry on the nose. It is silken in feel, with creamy red fruit flavors, yet propped up by', price:'16.95', image:'https://wineexpress.scene7.com/is/image/WineExpress/t/200//773012319_2.jpg' },
    	{name: 'Coppola 2018 Pinot Noir', id: '3', description:"Here's the newest addition to the Coppola Diamond Collection; Diamond Collection Golden Tier Pinot Noir, Oregon. THis is the first wine in the portfolio to hail from the state of Oregon. Grown in an appellation that experiences cool summers and mild winters, this Pinot Noir offers an exciting contrast to California bottling, expressing a more delicate tannin structure and higher acidity that makes it elegant and well-proportioned. This wine reflects the essence of the appellation and flavors that make Oregon Pinot Noir so desirable, and at a very affordable price. 100% Pinot Noir aged 9 months in French oak barrels. This wine is light and stylish, the palate presents a freshly picked quality, lively acidity, and well-balanced oak sweetness. This vintage is fruit forward with a satiny supple texture and ripe tannins. Thanks to careful barrel selection, notes of grilled almonds and toasted bread are beautifully integrated into the flavors. A great value!", price:'21.95', image:'https://wineexpress.scene7.com/is/image/WineExpress/t/200//175017518_2.jpg'},
    	{name: 'Crous St. Martin 2016 Chateauneuf du Pape', description:"The origin dates from 1879 which coincides with the restoration of St Martin’s Cross (“Crous” in local provincial language), which the monks had installed to indicate the road to Châteauneuf. The grapes. for this Chateauneuf-du-Pape are sourced from vines in north-facing sandy, compacted safre soils; galet stone covered soils on Les Bédines.The harvest starts with Syrah, followed by Grenache and finishes with Mourvèdre which needs more time to mature. The yields are very low, only about 2 tons per acre. Vinification is traditional and aging is in large casks. The final blend is 80% Grenache, 10% Syrah and  10% Mourvedre bottled unfined and unfiltered.The Wine Advocate scored this 93 points saying 'A beautiful clean ruby color. The nose will reveal aromas of cherry, mulberry, and fine spices. Sensual mouthfeel expressing depth and smoothness with aromas of kirsch, blackcurrant, followed by fine spices such as thyme, licorice, and white pepper. Tannins are present but are polished'", price:'', id: '4', image:'https://wineexpress.scene7.com/is/image/WineExpress/t/200//191067816_2.jpg'}]);
  
	const [beer, setBeer] = React.useState(["Lager", "Pilsner", "American Imperial Stout"]);

	return(
		<BevContext.Provider value={{ wine, beer, setWine, setBeer }}>
			{children}
		</BevContext.Provider>
	);
}

export { BevContext, BevContextProvider, AuthContext, AuthContextProvider, appId }
