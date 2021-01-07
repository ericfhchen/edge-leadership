// Filtering using Memberstack Attributes and Finsweet CMS Filter Library

// Get Member Attributes from Memberstack

  MemberStack.onReady.then(function(member) {  
    // Get the member attributes
    var memberSchool = member["school"]
    var memberYear = member["year"]
    var memberDepartment = member["department"]
        
    // LGBTQ Filter Setup
    var memberLgbtqRaw = member["lgbtq"]
    var memberLgbtq
      if (memberLgbtqRaw == "Prefer not to say") {
        memberLgbtq = "";
      } else {
        memberLgbtq = memberLgbtqRaw;
      }
    
    // Gender Filter Setup
    var memberGenderRaw = member["gender"]
    var memberGender
      if (memberGenderRaw === "female") {
          memberGender = "women";
      } else if (memberGenderRaw === "male") {
          memberGender = "male";
      } else if (memberGenderRaw === "non-binary") {
          memberGender = "non-binary";
      } else {
        memberGender = "";
      }
  
    // Disability Filter Setup
    var memberDisabilityRaw = member["disabilities"]
    var memberDisability
      if (memberDisabilityRaw == "Prefer not to say") {
        memberDisability = "";
      } else {
        memberDisability = memberDisabilityRaw;
      }
      
    // Race Filter Setup
    // Black
    var memberBlackAfrican 
      if (member["black-african"] === "true") {
        memberBlackAfrican = "black-african"
      } else {
        memberBlackAfrican = ""
      }
    // Indigenous
    var memberIndigenous 
      if (member["indigenous-native"] === "true") {
        memberIndigenous = "indigenous-native"
      } else {
        memberIndigenous = ""
      }
    // Caucasian
    var memberCaucasian 
      if (member["caucasian"] === "true") {
        memberCaucasian = "caucasian"
      } else {
        memberCaucasian = ""
      }
    // South Asian
    var memberSouthAsian 
      if (member["south-asian"] === "true") {
        memberSouthAsian = "south-asian"
      } else {
        memberSouthAsian = ""
      }
    // Middle Eastern
    var memberMiddleEastern 
      if (member["middle-eastern"] === "true") {
        memberMiddleEastern = "middle-eastern"
      } else {
        memberMiddleEastern = ""
      }
    // East Southeast Asian
    var memberEastAsian 
      if (member["east-southeast-asian"] === "true") {
        memberEastAsian = "east-southeast-asian"
      } else {
        memberEastAsian = ""
      }
    
    var memberLatinx 
      if (member["latinx-hispanic"] === "true") {
        memberLatinx = "latinx-hispanic"
      } else {
        memberLatinx = ""
      }
    
// HIRING

    // Find the button (it can be a link block or link) by class name
    var schoolFilter = document.querySelector('.filter-btn-school'); 
    var yearFilter = document.querySelector('.filter-btn-year'); 
    var lgbtqFilter = document.querySelector('.filter-btn-lgbtq'); 
    var genderFilter = document.querySelector('.filter-btn-gender'); 
    var disabilityFilter = document.querySelector('.filter-btn-disabled'); 
      // for all races
    var blackRaceFilter = document.querySelector('.filter-btn-black-african'); 
    var indigenousRaceFilter = document.querySelector('.filter-btn-indigenous-native'); 
    var caucasianRaceFilter = document.querySelector('.filter-btn-caucasian'); 
    var southAsianRaceFilter = document.querySelector('.filter-btn-south-asian'); 
    var middleEasternRaceFilter = document.querySelector('.filter-btn-middle-eastern'); 
    var eastAsianRaceFilter = document.querySelector('.filter-btn-east-southeast-asian'); 
    var latinxRaceFilter = document.querySelector('.filter-btn-latinx-hispanic'); 
    
    // set the 'filter-by' property of the button (this is needed for the Finsweet library  
    schoolFilter.setAttribute('filter-by', memberSchool);
    yearFilter.setAttribute('filter-by', memberYear); 
    lgbtqFilter.setAttribute('filter-by', memberLgbtq); 
    genderFilter.setAttribute('filter-by', memberGender); 
    disabilityFilter.setAttribute('filter-by', memberDisability); 
      // for all races
    blackRaceFilter.setAttribute('filter-by', memberBlackAfrican); 
    indigenousRaceFilter.setAttribute('filter-by', memberIndigenous); 
    caucasianRaceFilter.setAttribute('filter-by', memberCaucasian);
    southAsianRaceFilter.setAttribute('filter-by', memberSouthAsian); 
    middleEasternRaceFilter.setAttribute('filter-by', memberMiddleEastern);
    eastAsianRaceFilter.setAttribute('filter-by', memberEastAsian); 
    latinxRaceFilter.setAttribute('filter-by', memberLatinx); 

// SCHOLARSHIPS

    // Find the button (it can be a link block or link) by class name
    var schoolFilter2 = document.querySelector('.filter-btn-school2'); 
    var departmentFilter2 = document.querySelector('.filter-btn-department2'); 
    var yearFilter2 = document.querySelector('.filter-btn-year2'); 
    var lgbtqFilter2 = document.querySelector('.filter-btn-lgbtq2'); 
    var genderFilter2 = document.querySelector('.filter-btn-gender2'); 
    var disabilityFilter2 = document.querySelector('.filter-btn-disabled2'); 
      // for all races
    var blackRaceFilter2 = document.querySelector('.filter-btn-black-african2'); 
    var indigenousRaceFilter2 = document.querySelector('.filter-btn-indigenous-native2'); 
    var caucasianRaceFilter2 = document.querySelector('.filter-btn-caucasian2'); 
    var southAsianRaceFilter2 = document.querySelector('.filter-btn-south-asian2'); 
    var middleEasternRaceFilter2 = document.querySelector('.filter-btn-middle-eastern2'); 
    var eastAsianRaceFilter2 = document.querySelector('.filter-btn-east-southeast-asian2'); 
    var latinxRaceFilter2 = document.querySelector('.filter-btn-latinx-hispanic2'); 
    
    // set the 'filter-by' property of the button (this is needed for the Finsweet library  
    schoolFilter2.setAttribute('filter-by', memberSchool);
    departmentFilter2.setAttribute('filter-by', memberDepartment);
    yearFilter2.setAttribute('filter-by', memberYear); 
    lgbtqFilter2.setAttribute('filter-by', memberLgbtq); 
    genderFilter2.setAttribute('filter-by', memberGender); 
    disabilityFilter2.setAttribute('filter-by', memberDisability); 
      // for all races
    blackRaceFilter2.setAttribute('filter-by', memberBlackAfrican); 
    indigenousRaceFilter2.setAttribute('filter-by', memberIndigenous); 
    caucasianRaceFilter2.setAttribute('filter-by', memberCaucasian);
    southAsianRaceFilter2.setAttribute('filter-by', memberSouthAsian); 
    middleEasternRaceFilter2.setAttribute('filter-by', memberMiddleEastern);
    eastAsianRaceFilter2.setAttribute('filter-by', memberEastAsian); 
    latinxRaceFilter2.setAttribute('filter-by', memberLatinx); 

  });

// Properly Denote Paid/Unpaid Opportunities
(function() {
	var paidText = document.querySelectorAll('.paid');
    paidText.forEach(function(paidText){	
        if (paidText.innerHTML = 'yes') {
        	paidText.innerHTML = 'paid';
        } else if (paidText.innerHTML = 'no') {
        	paidText.innerHTML = 'volunteer';
        }
    });
})();

// Run Finsweet Filter using Member Attributes
(function() {
var jobPosts = new FsLibrary('.job-posts-list')

// Default Filters
var defaultFilters = [
  {
    filterWrapper: '.filter-school',
    filterType: 'exclusive'
  },
  {
    filterWrapper: '.filter-year',
    filterType: 'exclusive'
  },
  {
    filterWrapper: '.filter-race',
    filterType: 'multi'
  },
  {
    filterWrapper: '.filter-gender',
    filterType: 'exclusive'
  },
  {
    filterWrapper: '.filter-lgbtq',
    filterType: 'exclusive'
  },
  {
    filterWrapper: '.filter-disabled',
    filterType: 'exclusive'
  },
  //Additional Filters
  {
    filterWrapper: '.filter-company',
    filterByClass: '.company',
    filterType: 'exclusive'
  },
  {
    filterWrapper: '.filter-location',
    filterByClass: '.location',
    filterType: 'exclusive'
  },
  {
    filterWrapper: '.filter-position',
    filterByClass: '.position',
    filterType: 'exclusive'
  },
  {
    filterWrapper: '.filter-pay',
    filterByClass: '.paid',
    filterType: 'exclusive'
  }
]

jobPosts.filter({
  filterArray: defaultFilters,
  activeClass: '.filter-btn-active',
  animation: {
    enable: false
  }	
})

})();

// Filter on Page Load
// (function defaultFilters() {
//   document.querySelector('.filter-btn-school').click();
// 	document.querySelector('.filter-btn-year').click();
//   document.querySelector('.filter-btn-race').click();
//   document.querySelector('.filter-btn-gender').click();
//   document.querySelector('.filter-btn-lgbtq').click();
//   document.querySelector('.filter-btn-disabled').click();
// })();

// Additional Filters for ALL Jobs
(function() {
var jobPostsAll = new FsLibrary('.job-posts-list-untargeted')

var additionalFilters = [
  //Additional Filters
  {
    filterWrapper: '.filter-company',
    filterByClass: '.company',
    filterType: 'exclusive'
  },
  {
    filterWrapper: '.filter-location',
    filterByClass: '.location',
    filterType: 'exclusive'
  },
  {
    filterWrapper: '.filter-position',
    filterByClass: '.position',
    filterType: 'exclusive'
  },
  {
    filterWrapper: '.filter-pay',
    filterByClass: '.paid',
    filterType: 'exclusive'
  }
]

jobPostsAll.filter({
  filterArray: additionalFilters,
  activeClass: '.filter-btn-active',
  animation: {
    enable: false
  }	
})

})();

// "No Matches Found" Text Replace
// $(".job-posts-list").on('DOMNodeInserted', function (e) {
//     let $newItem = $(e.target);
//     if ($newItem.hasClass('filter-empty-message')) {
//         $newItem.text('No new opportunities found.');
//     } else {
//         $newItem.text('')
//     }
// });

// MY APPLICATIONS – Reverse Sort Application Lists
// immediately/self invoked function. This function executes right away
(function() {
  // create a new Library instance and store it in a variable called "my-applications-list"
  // Long Lists
  var hiringappListlong = new FsLibrary('.my-applications-list-hiring-long')
  var scholarshipappListlong = new FsLibrary('.my-applications-list-scholarship-long')
  var eventappListlong = new FsLibrary('.my-applications-list-event-long')
  
  hiringappListlong.sort({
	  sortTrigger: '.sort-button-apps', // class of the button........
    sortReverse: true, // if you want sort first click to be Z>A.......
//    activeClass: 'active', // class that styles the active state
  	animation: {
    	enable: false
  	}
	}) 
  
  scholarshipappListlong.sort({
	  sortTrigger: '.sort-button-apps-scholarship', // class of the button........
    sortReverse: true, // if you want sort first click to be Z>A.......
//    activeClass: 'active', // class that styles the active state
  	animation: {
    	enable: false
  	}
	}) 
  
  eventappListlong.sort({
    sortTrigger: '.sort-button-apps-event', // class of the button........
    sortReverse: true, // if you want sort first click to be Z>A.......
    //    activeClass: 'active', // class that styles the active state
    animation: {
    	enable: false
  	}
	}) 
  
})();

// Default sort functions
function defaultSortHiring() {
    document.querySelector('.sort-button-apps').click();
  }
  document.addEventListener("DOMContentLoaded", defaultSortHiring);
  defaultSortHiring();
  
function defaultSortScholarship() {
    document.querySelector('.sort-button-apps-scholarship').click();
}
  document.addEventListener("DOMContentLoaded", defaultSortScholarship);
  defaultSortScholarship();
  
function defaultSortEvent() {
    document.querySelector('.sort-button-apps-event').click();
}
//  document.addEventListener("DOMContentLoaded", defaultSortEvent);
  defaultSortEvent();


// Use collection list to fill Select fields
// SCHOOL
$('.school-select-item').each(function(){
var s = $(this).text();
$('#School').append('<option value="'+s+'">'+s+'</option>');
});

// DEPARTMENT
$('.department-select-item').each(function(){
var d = $(this).text();
$('#Department').append('<option value="'+d+'">'+d+'</option>');
});
