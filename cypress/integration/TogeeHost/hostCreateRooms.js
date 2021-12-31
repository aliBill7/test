

							//  Elements etc
// URL
var link = 'https://qahost.togee.io/'

// togee plugin button
var pluginBtn = '.chat_plugin_icon'
var plugn = '.togee_chat_plugin'

// public & private room
var pubRoom = '.card.card1.active'
var priRoom = '.card.card2'

// Header text
var headerSec = '.togee_room_type_container > .header_section'
var headerSecConti = '.togee_continue_with_container > .header_section'

// 'i' button
var qBtn = '.question_container'

// Buttons 
var roomTypeContainer = '.togee_room_type_container'
var nextBtn = '.footer_next_btn'
var createRoomBtn = '.cw_footer_create_btn'
var cancelBtn = '.cw_footer_cancel_btn'

var backBtn = '.cw_back_btn'
var errorMsg = '.input_error_msg'


var hostNames = ['John','Monica','Sara','Peter','George','Hania','Asma','Naseem','Qasim', 'Host last', 'Host poko']
var blackLstF = ['god', 'God', 'GoD', 'gOd', 'wtf', 'Wtf', 'WtF', 'wTf', 'fuck', 'FuCk', 'fUcK', 'hey wtf', 'im not god']
var blackLstP = ['godO', 'iGod', 'iGoD', 'gOdPogo', 'wtfLo', 'eWtf', 'jiWtF', 'wTfuioy', 'fuckmon', 'FuCkYou', 'fUcKJop']

	describe ('Host_Creates Rooms', function(){
	it.only('Host selects Room Type & Faq button', function() {

		cy.visit(link)
		cy.get(plugn).should('be.visible')
		cy.get(pluginBtn).should('be.visible').then(() => {
			cy.log('Pass : Plugin button visible')
		
		});
		cy.get(pluginBtn).click()
		cy.get(roomTypeContainer).should('be.visible').then(() => {
			cy.log('Pass : Room Type screen opened')
		
		});

		cy.get(headerSec).find('.type_heading').invoke('text').then((text) => { 
			expect(text).equal('Room TYPE')
			cy.log("Pass : Text 'Room Type' shown")
		
		});

		cy.get('.selected_card_desc_content').invoke('text').then((text)=>{
			expect(text).contains('Public room')
			expect(text).contains('Link to join will be publicly available')
			cy.log('Pass : Public button + subtext shown')
			cy.get('.card_container > .card.card1').should('contain', 'Public')
				
		});

		cy.get(priRoom).click()
		cy.get('.selected_card_desc_content').invoke('text').then((text)=>{
			expect(text).contains('Friends room')
			expect(text).contains('Only people with link can invite')
			cy.log('Pass : Friends button + subtext shown')
			cy.get('.card_container > .card.card2').should('contain', 'Friends').click()
				
		});

		cy.get(nextBtn).should('contain', 'Next').then(()=>{
			cy.log('Pass : Next button shown')
		})

		cy.get(cancelBtn).should('contain', 'Cancel').then(()=>{
			cy.log('Pass : CANCEL button shown')
		})

		cy.get(nextBtn).click()
		cy.get(headerSecConti).find('.type_heading').should('contain','Continue with').then(()=>{
			cy.log("Pass : Text 'Continue with' shown")
		})
		cy.get(backBtn).click()
		cy.get(headerSec).should('contain','Room TYPE').then(()=>{
			cy.log("Pass :  Next & Back(<) buttons working")
		})


		cy.get(qBtn).invoke('text').then((text) =>{
			expect(text).contains('What is this?')
			cy.log("Pass :  'What is this?' i button text shown")
			cy.get(qBtn).invoke('removeAttr', 'target').click()

		});

		cy.url().should('contain', 'com/faq').then(()=>{
			cy.log("Pass :  'i' button working")
			cy.go('back')
			cy.url().should('contain', 'togee.io').then(()=>{
				cy.log("Pass :  Navigated back to Togee home")
			})
		})
		


	it('Host enters Name & creates room', function() {	
		cy.visit(link)
		cy.get(pluginBtn).click()
		cy.get(priRoom).find('.image_container').click()
		cy.get('.input_container').find('input').invoke('attr', 'placeholder').should('contain', 'Enter a name here').then(()=>{
			cy.log("Pass :  Placeholder text 'Enter a name here' shown")
		})

		cy.get('.input_container').find('input').type(blackLstP[ Math.floor(Math.random()* blackLstP.length)]).then(()=>{
			cy.get(errorMsg).invoke('attr', 'style').should('contain', 'display: none;')
			cy.log('Pass : No error with mixed profanity words')
		})
		cy.get(errorMsg).invoke('attr', 'style').should('contain', 'display: block;')
		cy.get('.input_container').find('input').type(blackLstF[ Math.floor(Math.random()* blackLstF.length)])
		cy.get(errorMsg).should('contain', 'That’s a great name and unfortunately not available.')
		


		
		cy.get('.input_container').find('input').type(hostNames[ Math.floor(Math.random()* hostNames.length)])
		cy.get(createRoomBtn).should('be.visible')
		cy.get(createRoomBtn).click()
		// expect(true).to.equal(true)
		// cy.go('back') OR cy.go(-1)
		// cy.wait(200)
		// cy.go('forward') OR cy.go(1)
	})
})

	it('Creates private room', function() {


		cy.visit(link)
		cy.get(pluginBtn).should('be.visible')
		cy.get(pluginBtn).click()
		cy.get(roomTypeContainer).should('be.visible')
		cy.get(priRoom).find('.image_container').click()
		cy.get(nextBtn).should('be.visible')
		cy.get(nextBtn).click()
		cy.get('.input_container').find('input').type(hostNames[ Math.floor(Math.random()* hostNames.length)])
		cy.get(createRoomBtn).should('be.visible')
		cy.get(createRoomBtn).click()
		
	})

})
