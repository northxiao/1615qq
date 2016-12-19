define(["backbone"], function(Backbone){
	var Router = Backbone.Router.extend({
		routes:{
			home: "home",
			score:"score",
			card:"card",
			my: "my",
			send:"send",
			search:"search",
			integral:"integral"
		},
		home: function(){
			require(["modules/home/home.js"],function(home){
				home.init();
			});
		},
		score: function(){
			require(["modules/score/score.js"],function(score){
				score.init();
			});
		},
		card: function(){
			require(["modules/card/card.js"],function(card){
				card.init();
			});
		},
		my: function(){
			require(["modules/my/my.js"],function(my){
				my.init();
			});
		},
		send: function(){
			require(["modules/send/send.js"],function(send){
				send.init();
			});
		},
		search: function(){
			require(["modules/search/search.js"],function(search){
				search.init();
			});
		},
		integral: function(){
			require(["modules/integral/integral.js"],function(integral){
				integral.init();
			});
		},
	});
	return new Router();
});