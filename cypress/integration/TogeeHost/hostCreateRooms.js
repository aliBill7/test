

							//  Elements etc
// URL
let qaLink = 'https://qahost.togee.io/'
let roomUrl = ''

// togee plugin button
let pluginBtn = '.chat_plugin_icon'
let plugn = '.togee_chat_plugin'

// public & private room
let roomTyp = ['.card.card1.active', '.card.card2']

// Header text
let headerSec = '.togee_room_type_container > .header_section'
let headerSecConti = '.togee_continue_with_container > .header_section'

// 'i' button
let qBtn = '.question_container'

// Buttons 
let roomTypeContainer = '.togee_room_type_container'
let nextBtn = '.footer_next_btn'
let createRoomBtn = '.cw_footer_create_btn'
let cancelBtn = '.cw_footer_cancel_btn'

let backBtn = '.cw_back_btn'
let errorMsg = '.input_error_msg'	
let nameInput = '.input_container'
let clrInput = '.input_close_icon_container'
let welcMsg = '.tlss_tooltip > .tlss_tooltip_msg'
let invitBtn = '.tlss_invitation_button'

									

										// Menu Screen

let endBtn = '.tlss_starred_page_list_footer .tlss_starred_page_list_footer_end_room_button'
let infoBtn = '.tlss_starred_page_list_footer .tlss_splf_info_link'
let inviteBtnMenu = '.tlss_live_show_start_expand_content .tlss_invitation_button'
let hostNamMenu = '.tlss_host_name_container .tlss_host_name_text'
let hostViews = '.tlss_host_name_container .tlss_host_views_container .tlss_host_views_total'

										// Toolbar BTNs

let lineBar = '.tlss_drag_menu_bar'

// Message									
let msg_Icon = '.tlss_feature_message_container > .tlss_feature_body'
let msgInput = '.tlss_message_input'
let msgSend_Btn = '.tlss_message_input_send_icon_container > svg'
let msgH_lastMsg = '.tlss_messages_wrapper > .tlss_message:last-child > .tlss_user_msg'
let msgH_username = '.tlss_messages_wrapper > .tlss_message:last-child > .tlss_my_username'

// IDs
// 1643635075318
// 1643635134956
// 1643635253627
// 1643635330265
// 1643635331350
// 1643635331887
// 1643635332208

// Doodle
let dodl_IconDis = '.tlss_feature_body tlss_feature_doddle tlss_feature_doddle_disabled'
let dodl_Icon = '.tlss_feature_body tlss_feature_doddle'

// Screen Share
let scrShr_IconDis = '.tlss_feature_body tlss_feature_screen_share tlss_feature_screen_share_disabled'
let scrShr_Icon = '.tlss_feature_body tlss_feature_screen_share'

// Camera
let cam_IconDis = '.tlss_feature_body tlss_feature_camera tlss_feature_camera_disabled'
let cam_Icon = '.tlss_feature_body tlss_feature_camera > tlss_camera_disabled_icon'

// Mic
let mic_IconDis = '.tlss_feature_body tlss_feature_mike tlss_feature_mike_disabled'
let mic_Icon = '.tlss_feature_body tlss_feature_mike > tlss_mike_disabled_icon'

// Star , Favorite
let star_Icon = '.tlss_feature_star'

let hostNames = ['John','Monica','Sara','Peter','George','Hania','Asma','Naseem','Qasim', 'Host last', 'Host poko']
let blackLstF = ['god', 'God', 'GoD', 'gOd', 'wtf', 'Wtf', 'WtF', 'wTf', 'fuck', 'FuCk', 'fUcK', 'hey wtf', 'im not god']
let blackLstP = ['godO', 'iGod', 'iGoD', 'gOdPogo', 'wtfLo', 'eWtf', 'jiWtF', 'wTfuioy', 'fuckmon', 'FuCkYou', 'fUcKJop']

let specChar = ['~','`','!','@','#','$','%','^','&','*','(',')','-','_','=','+','\\','|', '{}','[]',"'''",'"',';',':',
	':libran',   'fojor=',    ';psidh df',   'sisa"',     '#sisa',	'libran&',   '#psidh df', 'psidh df%',   "'''qopo",   'limos(',
	'`lordd',    'fojor|',    "'''psidh df", 'limos@',    '|osof',	'limos{}',   '"asim',     'lordd+',      ')psidh df', 'sisa{}',
	';qopo',     'qopo|',     '-asim',       'qopo`',     '(bsi',	'lordd$',    "'''gds",    'asim`',       '~limos',    'fojor+',
	'_psidh df', 'gds\\',     '@limos',      'osof`',     '-sisa',	'sisa"',     '&osof',     'fojor^',      ')qopo',     'psidh df+',
	'{}osof',    'bsi(',      '^sisa',       'lordd:',    '[]gds',	"gds'''",    '(osof',     'gds@',        '\\sisa',    'fojor&',
	'=qopo',     'psidh df%', '~lordd',      'sisa(',     ')libran',	'gds~',      ')limos',    'qopo~',       '$lordd',    "limos'''",
	'!bsi',      'bsi[]',     '*limos',      'limos!',    '!libran',	'lordd[]',   '$fojor',    'bsi{}',       '-limos',    'libran%',
	'^osof',     'sisa`',     '#fojor',      'sisa;',     '"bsi',	'limos@',    '=asim',     'osof|',       '^sisa',     'bsi@',
	'+gds',      'bsi%',      ')psidh df',   'sisa`',     '`sisa',	'osof(',     '+osof',     'libran=',     '*limos',    'asim$',
	'*fojor',    'fojor*',    '{}osof',      'bsi(',      '[]asim',	'qopo[]',    '&qopo',     'osof#',       '^bsi',      'bsi&'
   ]

let msgArray = ['if you need a build', 'let me know', 'i think there is something', 'no time to die', 'subtask where goes to it',
'never have i ever seen something', 'with due respect', 'one must try again', 'regards to best',
'peoples choice', 'These are short, famous texts in English', 'from classic sources like the Bible',
'or Shakespeare. Some texts have word definitions', 'and explanations to help you.', 
'Some of these texts are written in an old style of English.', 'Try to understand them, because the English',
'that we speak today is based on what our great,', 'great, great, great grandparents spoke before! Of course,', 
'not all these texts were originally written in English.', 'The Bible, for example, is a translation.',
 'But they are all well known in English today,', 'and many of them express beautiful thoughts']


	describe ('Host-Module: Create Rooms', function(){
	it('	=> Selects Room Type & Faq button', function() {

		cy.visit(qaLink)
		cy.get(plugn).should('be.visible')
		cy.get(pluginBtn).should('be.visible').then(() => {
			cy.log('Pass : Plugin button visible')
			cy.task('log','Pass : Plugin button visible')
		
		});
		cy.get(pluginBtn).click()
		cy.get(roomTypeContainer).should('be.visible').then(() => {
			cy.log('Pass : Room Type screen opened')
			cy.task('log','Pass : Room Type screen opened')
		
		});

		cy.get(headerSec).find('.type_heading').invoke('text').then((text) => { 
			expect(text).equal('Room TYPE')
			cy.log("Pass : Text 'Room Type' shown")
			cy.task('log' , "Pass : Text 'Room Type' shown")
		
		});

		cy.get('.selected_card_desc_content').invoke('text').then((text)=>{
			expect(text).contains('Public room')
			expect(text).contains('Link to join will be publicly available')
			cy.log('Pass : Public button + subtext shown')
			cy.task('log', 'Pass : Public button + subtext shown')
			cy.get('.card_container > .card.card1').should('contain', 'Public')
				
		});

		cy.get(roomTyp[1]).click()
		cy.get('.selected_card_desc_content').invoke('text').then((text)=>{
			expect(text).contains('Friends room')
			expect(text).contains('Only people with link can invite')
			cy.log('Pass : Friends button + subtext shown')
			cy.task('log','Pass : Friends button + subtext shown')
			cy.get('.card_container > .card.card2').should('contain', 'Friends').click()
				
		});

		cy.get(nextBtn).should('contain', 'Next').then(()=>{
			cy.log('Pass : Next button shown')
			cy.task('log','Pass : Next button shown')
		})

		cy.get(cancelBtn).should('contain', 'Cancel').then(()=>{
			cy.log('Pass : CANCEL button shown')
			cy.task('log','Pass : CANCEL button shown')
		})

		cy.get(nextBtn).click()
		cy.get(headerSecConti).find('.type_heading').should('contain','Continue with').then(()=>{
			cy.log("Pass : Text 'Continue with' shown")
			cy.task('log',"Pass : Text 'Continue with' shown")
		})
		cy.get(backBtn).click()
		cy.get(headerSec).should('contain','Room TYPE').then(()=>{
			cy.log("Pass :  Next & Back(<) buttons working")
			cy.task('log',"Pass :  Next & Back(<) buttons working")
		})


		cy.get(qBtn).invoke('text').then((text) =>{
			expect(text).contains('What is this?')
			cy.log("Pass :  'What is this?' i button text shown")
			cy.task('log',"Pass :  'What is this?' i button text shown")
			cy.get(qBtn).invoke('removeAttr', 'target').click()

		});

		cy.url().should('contain', 'com/faq').then(()=>{
			cy.log("Pass :  'i' button working")
			cy.task('log',"Pass :  'i' button working")
			cy.go('back')
			cy.url().should('contain', 'togee.io').then(()=>{
				cy.log("Pass :  Navigated back to Togee home")
				cy.task('log',"Pass :  Navigated back to Togee home")
			})
		})
		
	})

	it('	=> Name entry & field validations', function() {	

		cy.visit(qaLink)
		cy.get(pluginBtn).click()
		cy.get(roomTyp[ Math.floor(Math.random()* roomTyp.length)]).find('.image_container').click()
		cy.get(nextBtn).click()
		cy.get(nameInput).find('input').invoke('attr', 'placeholder').should('contain', 'Enter a name here').then(()=>{
			cy.log("Pass :  Placeholder text 'Enter a name here' shown")
			cy.task('log',"Pass :  Placeholder text 'Enter a name here' shown")
		})

		cy.get(nameInput).find('input').type(blackLstP[ Math.floor(Math.random()* blackLstP.length)]).then(()=>{
			cy.get(errorMsg).invoke('attr', 'style').should('contain', 'display: none;')
			cy.log('Pass : No error with mixed profanity words')
			cy.task('log','Pass : No error with mixed profanity words')
			cy.get(clrInput).click()
		})
		
		cy.get(nameInput).find('input').type(blackLstF[ Math.floor(Math.random()* blackLstF.length)]).then(()=>{
			cy.get(errorMsg).invoke('attr', 'style').should('contain', 'display: block;')
			cy.get(errorMsg).should('contain', 'That’s a great name and unfortunately not available.')
			cy.log('Pass : Error with profanity words')
			cy.task('log','Pass : Error with profanity words')
			cy.get(clrInput).click()
		})
		
		cy.get(nameInput).find('input').type('ab').then(()=>{
			cy.get(createRoomBtn).should('be.disabled')
			cy.log('Pass : Create button disabled even with 2 characters')
			cy.task('log','Pass : Create button disabled even with 2 characters')
			cy.get(clrInput).click()
			cy.task('log','Pass : Create button disabled with no input')
		})

		cy.get(nameInput).find('input').type(specChar[ Math.floor(Math.random()* specChar.length)]).then(()=>{
			cy.get(errorMsg).invoke('attr', 'style').should('contain', 'display: block;')
			cy.get(errorMsg).should('contain', 'Special characters not allowed.')
			cy.log('Pass : Error with special characters')
			cy.task('log','Pass : Error with special characters')
			cy.get(clrInput).click()
		})
		



	})
	
	it('	=> Initiate new Room', function() {

		cy.visit(qaLink)
		cy.get(pluginBtn).click()
		cy.get(roomTyp[ Math.floor(Math.random()* roomTyp.length)]).find('.image_container').click()
		cy.get(nextBtn).click()
		cy.get(nameInput).find('input').type(hostNames[ Math.floor(Math.random()* hostNames.length)])
		cy.get(createRoomBtn).should('be.visible')
		
		cy.get(createRoomBtn).click()
		cy.wait(3000)
		cy.get(welcMsg).should('be.visible')
		cy.get(invitBtn).should('be.visible')
		cy.get(welcMsg).should('contain', 'Welcome to your room! Now you can start').then(()=>{
			cy.task('log',"Pass : Message shown after create room ~ 'Welcome to your room! Now you can start..'")
			cy.task('log','Pass : Room Created')		
			cy.get(invitBtn).should('contain', 'Invite participants')
			cy.task('log','Pass : `Invite Participants` button text shown')
		})

		cy.get(invitBtn).should('be.visible').then(()=>{
			cy.get('.tlss_invitation_container').find(invitBtn).click()
			cy.get('.togee_snakbar').invoke('attr', 'style').should('contain', 'display: flex;')
			cy.get('.togee_snakbar').should('contain','Link saved on your clipboard successfully').then(()=>{
				cy.task('log','Pass : Link copied text shown upon Invite button click')
				
			})
			
			cy.get(inviteBtnMenu).invoke('attr','data-invitation').then((link)=>{
				roomUrl = link;
				cy.task('log',`\t << Created Room's link : ${roomUrl} >>`)
			})

			// cy.get(msg_Icon).click()
			// cy.get(msgInput).type('{ctrl+V}')
			// cy.get(msgSend_Btn).click()
			// cy.get(msgH_firMsg).invoke('text').then((toxt)=>{
			// cy.task('log',`Created Room's link:  ${toxt}`)
			// })
			
			//cy.get(msgInput).type('{ctrl+v}')  
			// Not implemented in cypress yet   https://github.com/cypress-io/cypress/issues/7105

			cy.on('window:alert', ()=>{
				cy.task('log','Pass : reaching alert')
				return true;
			})

			// cy.window().then((win) => {
			// 	cy.task('log','Pass : reaching inside window . then')
			// 	var text = win.navigator.clipboard.readText().then(text => {
			// 		cy.task('log',"Created Room's link : ", text);
			// 		cy.request(text)
			// 	});
			// });

			
	
		})	
		
		// expect(true).to.equal(true)
		// cy.go('back') OR cy.go(-1)
		// cy.wait(200)
		// cy.go('forward') OR cy.go(1)
	})


})


describe ('Host-Toolbar : Messaging', function(){
	
	it.only('	=> Positive Messages', function() {

		let msgTxtP = ''
		let msgH_usernameP = '.tlss_my_username'

		cy.visit(qaLink)
		cy.get(pluginBtn).click()
		cy.get(roomTyp[ Math.floor(Math.random()* roomTyp.length)]).find('.image_container').click()
		cy.get(nextBtn).click()
		let userNmP = hostNames[ Math.floor(Math.random()* hostNames.length)]
		cy.get(nameInput).find('input').type(userNmP)
		cy.get(createRoomBtn).should('be.visible')
		cy.get(createRoomBtn).click()
		cy.wait(2000)

		cy.get('.tlss_invitation_container').find(invitBtn).click()
		cy.get(inviteBtnMenu).invoke('attr','data-invitation').then((link)=>{
			roomUrl = link;
			cy.task('log',`\t << Created Room's link : ${roomUrl} >>`)
		})
		
		cy.task('log',"<< Starting sending positive Messages >>")
		cy.get(msg_Icon).click()
		for (let i =1;i<8;i++){
			
			msgTxtP = blackLstP[ Math.floor(Math.random()* blackLstP.length)]
			msgTxtP += msgArray[ Math.floor(Math.random()* msgArray.length)]
			cy.get(msgInput).type(msgTxtP)
			cy.get(msgSend_Btn).click()
			
			cy.get(msgH_lastMsg).invoke('text').then((toxt)=>{
				cy.task('log',`<HostMsg> ${userNmP} :  ${toxt}`)
				cy.get(msgH_lastMsg).invoke('attr','data-prohibited').should('contain','false').then(()=>{
					cy.task('log', `Message->  [ ${toxt} ] \n has NO prohibited word/s`)
				})
			})

		}

		cy.get(msgH_username).invoke('text').should('be.equal',userNmP).then((uName)=>{
			cy.task('log', `Username used same as creating room -> ${uName} = ${userNmP}`)			
		})
		
		cy.get(lineBar).trigger('mousedown', { which: 1 })
			.trigger('mousemove', 'bottom', {force:true}) // start
			.trigger('mousemove', 'top') // end
			.wait(0) // requestAnimationFrame to invoke fireOnMove 
			.trigger('mouseup');   
	
		cy.get(endBtn).should('be.visible').then(()=>{
			cy.task('log', "Menu Screen opened via toolbar swipe")
			cy.task('log', "End Button Showing")
			cy.task('log', "Ending Room")
		})
		cy.get(endBtn).click()
		

	})

	it.only('	=> Blacklist Messages', function() {

		let msgTxtF = ''
		let msgH_usernameF = '.tlss_my_username'

		cy.visit(qaLink)
		cy.get(pluginBtn).click()
		cy.get(roomTyp[ Math.floor(Math.random()* roomTyp.length)]).find('.image_container').click()
		cy.get(nextBtn).click()
		let userNmF = hostNames[ Math.floor(Math.random()* hostNames.length)]
		cy.get(nameInput).find('input').type(userNmF)
		cy.get(createRoomBtn).should('be.visible')
		cy.get(createRoomBtn).click()
		cy.wait(2000)

		cy.get('.tlss_invitation_container').find(invitBtn).click()
		cy.get(inviteBtnMenu).invoke('attr','data-invitation').then((link)=>{
			roomUrl = link;
			cy.task('log',`\t << Created Room's link : ${roomUrl} >>`)
		})
		
		cy.task('log',"<< Starting sending prohibited Messages >>")
		cy.get(msg_Icon).click()
		for (let i =1;i<8;i++){
			
			msgTxtF = blackLstF[ Math.floor(Math.random()* blackLstF.length)] + " "
			msgTxtF += msgArray[ Math.floor(Math.random()* msgArray.length)]
			cy.get(msgInput).type(msgTxtF)
			cy.get(msgSend_Btn).click()
			
			cy.get(msgH_lastMsg).invoke('text').then((toxt)=>{
				cy.task('log',`<HostMsg> ${userNmF} :  ${toxt}`)
				cy.get(msgH_lastMsg).invoke('attr','data-prohibited').should('contain','true').then(()=>{
					cy.task('log', `Message-> [ ${toxt} ] \n contains prohibited word/s`)
				})
			})

		}

		cy.get(msgH_username).invoke('text').should('be.equal',userNmF).then((uNam)=>{
			cy.task('log', `Username used same as creating room -> ${uNam} = ${userNmF}`)
		})
		
		cy.get(lineBar).trigger('mousedown', { which: 1 })
			.trigger('mousemove', 'bottom', {force:true}) // start
			.trigger('mousemove', 'top') // end
			.wait(0) // requestAnimationFrame to invoke fireOnMove 
			.trigger('mouseup');   
	
		cy.get(endBtn).should('be.visible').then(()=>{
			cy.task('log', "Menu Screen opened via toolbar swipe")
			cy.task('log', "End Button Showing")
			cy.task('log', "Ending Room")
		})
		cy.get(endBtn).click()


	})


})
