Titanium.UI.setBackgroundColor('#000');

var win1 = Titanium.UI.createWindow({  //Windows
    text: 'Kendra Telin',
    backgroundColor:'#FFFFFF',
});



var fb = require('facebook');
fb.appid = 1609798169264313;
fb.permissions = ['publish_stream'];
fb.addEventListener('login', function(e) {
    if (e.success) {
        alert('Logged in');
    }
});
fb.addEventListener('logout', function(e) {
    alert('Logged out');
});
    
// Add the button.  Note that it doesn't need a click event listener.
win1.add(fb.createLoginButton({
    bottom:'0',
    style : fb.BUTTON_STYLE_WIDE
}));
win1.open();





var educationWindow = Ti.UI.createWindow({
text:'Education',
backgroundColor:'#B7F4ED'
});
var leadershipWindow = Ti.UI.createWindow({
text:'Leadership',
backgroundColor:'#B7F4ED'
});
var experienceWindow = Ti.UI.createWindow({
text:'Experience',
backgroundColor:'#FFFFFF'
});

var titleView = Ti.UI.createView({ //Titles
height: '20%',
width: '100%',
top:'0%',
backgroundImage: '/Images/print.png'
});
var titleLabel = Ti.UI.createLabel({
text:'Kendra Telin',
textAlign: 'center',
left: '25%',
height: Ti.UI.FILL,
font:{
fontSize:'75sp',
fontWeight:'bold',
fontColor:'#FFFFFF',
}
});
var educationTitleView = Ti.UI.createView({
top: 0,
backgroundColor: 'black',
height:'20%',
width: '100%',
});
var educationTitleLabel = Ti.UI.createLabel({
text:'Education',
textAlign: 'center',
color: '#B7F4ED',
height:Ti.UI.FILL,
font:{
fontSize:'75sp',
fontWeight:'bold',
}
});
var leadershipTitleView = Ti.UI.createView({
top: 0,
backgroundColor: 'black',
height:'20%',
width: '100%',
});
var leadershipTitleLabel = Ti.UI.createLabel({
text:'Leadership',
color: '#B7F4ED',
textAlign:'center',
height:Ti.UI.FILL,
font:{
fontSize:'75sp',
fontWeight:'bold',
}
});
var experienceTitleView = Ti.UI.createView({
top: 0,
backgroundColor: 'black',
height:'20%',
width: '100%',
});
var experienceTitleLabel = Ti.UI.createLabel({
text:'Experience',
color: '#B7F4ED',
textAlign:'center',
height:Ti.UI.FILL,
font:{
fontSize:'75sp',
fontWeight:'bold',
}
});

var ContactList = Ti.UI.createView({ //HOME SCREEN
height:'13%',
width:'45%',
top: '11%',
});
var contactInfo = Ti.UI.createLabel({
text: 'Phone: (509) 951-2852 \nEmail:teli9246@vandals.uidaho.edu',
textAlign:'center',
height:Ti.UI.FILL,
font:{
fontSize:'22sp',
}
});


var returnView = Ti.UI.createView({ //ButtonViews
bottom: '0',
left: 0,
height:'10%',
width:'100%',
backgroundColor:'black'
});
var educationView = Ti.UI.createView({
height: '20%',
width: '100%',
left: 0,
top: '20%'
});
var leadershipView = Ti.UI.createView({
height: '20%',
width: '100%',
left: 0,
top: '40%'
});
var experienceView = Ti.UI.createView({
height: '20%',
width: '100%',
left: 0,
top: '60%'
});

var leadershipWindView = Ti.UI.createView({
height: '70%',
width: '100%',
top: '20%',
bottom: '5%',
backgroundColor: '#FFFFFF',
});

var resume2Label= Ti.UI.createLabel({
	text:'Graduating May 2015\nBachelor of Science in Marketing\nBachelor of Science in Management- Emphasis in Human Resources\nUniversity of Idaho, Moscow, Idaho\nCumulative grade point average of 3.63\nCollege of Business and Economics Dean’s List- five consecutive semesters\nUniversity of Idaho Honors Program',
	textAlign:'center'
});

var educationWindView = Ti.UI.createView({
height: '70%',
width: '100%',
top: '20%',
bottom: '5%',
backgroundColor: '#FFFFFF',
});

var resume1Label= Ti.UI.createLabel({
	text:'Vice President of Marketing - Alpha Phi Beta Zeta\nScholarship Chair - Alpha Phi Beta Zeta\nPresident- Vandal Solutions, University of Idaho\nVice President of Services- Vandal Solutions\nManager of Human Resources- Vandal Solutions\nProject Team Leader- Vandal Solutions\nVice President of Leadership- University of Idaho PanHellenic Council',
	textAlign:'center'
});

var experienceWindView = Ti.UI.createView({
height: '70%',
width: '100%',
top: '20%',
bottom: '5%',
backgroundColor: '#FFFFFF',
});

var resume3Label= Ti.UI.createLabel({
	text:'Marketing Communications Intern- Stryker Endoscopy- May 2014-August 2014\nTeam Leader- Buckle	July 2011-Present',
	textAlign:'center'
});



var educationButton = Ti.UI.createButton({ //Buttons
title: 'Education',
color:'#B7F4ED',
height:Ti.UI.FILL,
width:'100%',
height: '100%',
borderColor: '#FFFFFF',
textAlign:'Center',
font:{
fontSize:'35sp',
fontWeight:'bold'
},
backgroundColor:'black'
});
var leadershipButton = Ti.UI.createButton({
title:'Leadership',
color:'#B7F4ED',
height:Ti.UI.FILL,
width:'100%',
height: '100%',
borderColor: '#FFFFFF',
textAlign:'Center',
font:{
fontSize:'35sp',
fontWeight:'bold'
},
backgroundColor:'black'
});
var experienceButton = Ti.UI.createButton({
title:'Experience',
color:'#B7F4ED',
height:Ti.UI.FILL,
width:'100%',
height: '100%',
borderColor: '#FFFFFF',
textAlign:'Center',
font:{
fontSize:'35sp',
fontWeight:'bold'
},
backgroundColor:'black'
});

var returnButton = Ti.UI.createButton({
title:'Return',
color:'black',
borderRadius: 10,
height:Ti.UI.FILL,
width:'15%',
height:'100%',
left: 0,
bordercolor:'black',
backgroundColor: '#B7F4ED',
textAlign:'center',
font:{
fontSize:'35sp',
fontWeight:'bold',
},
backgroundcolor:'#333333'
});


leadershipButton.addEventListener('click', function(e){ //Event Listeners
win1.close();
leadershipWindow.close();
educationWindow.close();
experienceWindow.close();
leadershipWindow.open();
});
educationButton.addEventListener('click', function(e){
win1.close();
leadershipWindow.close();
educationWindow.close();
experienceWindow.close();
educationWindow.open();
});
experienceButton.addEventListener('click', function(e){
win1.close();
leadershipWindow.close();
educationWindow.close();
experienceWindow.close();
experienceWindow.open();
});

returnButton.addEventListener('click', function(e){
win1.open();
});


win1.open();
win1.add(titleView);
titleView.add(titleLabel);
win1.add(leadershipView);
win1.add(educationView);
win1.add(experienceView);
win1.add(ContactList);
leadershipWindow.add(returnView);
educationWindow.add(returnView);
experienceWindow.add(returnView);
leadershipWindow.add(leadershipTitleView);
educationWindow.add(educationTitleView);
experienceWindow.add(experienceTitleView);
leadershipWindow.add(leadershipWindView);
educationWindow.add(educationWindView);
experienceWindow.add(experienceWindView);
educationWindView.add(resume2Label);
leadershipWindView.add(resume1Label);
experienceWindView.add(resume3Label);

leadershipView.add(leadershipButton);
educationView.add(educationButton);
experienceView.add(experienceButton);
returnView.add(returnButton);
leadershipTitleView.add(leadershipTitleLabel);
educationTitleView.add(educationTitleLabel);
experienceTitleView.add(experienceTitleLabel);
ContactList.add(contactInfo);