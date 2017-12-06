// <video width="320" height="240" controls>
//   <source src="movie.mp4" type="video/mp4">
//   <source src="movie.ogg" type="video/ogg">
//   Your browser does not support the video tag.
// </video>

let process = {
	menu:function(){

			<audio id="audio_history1">
				<source src="audio/history1.mp3" type="audio/mp3" />
			</audio>
			
				<h1><a href='front.html' className='imCustomClass' onClick={index.page1}>PSU</a></h1>
				<h1><a href='history.html' onClick={history.page2}>History</a></h1>
				<h1><a href='history1.html' onClick={history1.page3}>History1</a></h1>
				<h1><a href='vision.html' onClick={vision.page4}>Vision</a></h1>
				<h1><a href='mission.html' onClick={mission.page5}>Mission</a></h1>
				<h1><a href='core.html' onClick={core.page6}>Core Values</a></h1>
				<h1><a href='Quality.html' onClick={Quality.page7}>Quality</a></h1>
				<h1><a href='song.html' onClick={song.page8}>PSU Hymn</a></h1>
			
		</div>;
		ReactDOM.render(content,document.getElementById('root'));
	},
	page1:function(){
		process.audio('audio_bomb').play();
		let content = <div>
				this is page 1<br/><a href='front.html' onClick={process.menu}>back</a>
			</div>;
			ReactDOM.render(content,document.getElementById('root'));
		process.audio('audio_bomb').pause();
	},
	page2:function(){
		process.audio('audio_History').play();
		let content = <div>
				this is page 2<br/><a href='history.html' onClick={process.menu}>back</a>
			</div>;
			ReactDOM.render(content,document.getElementById('root'));
		process.audio('audio_History').pause();
	},
	page3:function(){
		process.audio('audio_History1').play();
		let content = <div>
				this is page 3<br/><a href='history1.html' onClick={process.menu}>back</a>
			</div>;
			ReactDOM.render(content,document.getElementById('root'));
		process.audio('audio_History1').pause();
	},
	page4:function(){
		process.audio('audio_Vision').play();
		let content = <div>
				this is page 4<br/><a href='vision.html' onClick={process.menu}>back</a>
			</div>;
			ReactDOM.render(content,document.getElementById('root'));
		process.audio('audio_Vision').pause();
	},
	page5:function(){
		process.audio('audio_Mission').play();
		let content = <div>
				this is page 4<br/><a href='mission.html' onClick={process.menu}>back</a>
			</div>;
			ReactDOM.render(content,document.getElementById('root'));
		process.audio('audio_Mission').pause();
	},
	page6:function(){
		process.audio('audio_Core').play();
		let content = <div>
				this is page 4<br/><a href='core.html' onClick={process.menu}>back</a>
			</div>;
			ReactDOM.render(content,document.getElementById('root'));
		process.audio('audio_Core').pause();
	},
	page7:function(){
		process.audio('audio_Quality').play();
		let content = <div>
				this is page 4<br/><a href='quality.html' onClick={process.menu}>back</a>
			</div>;
			ReactDOM.render(content,document.getElementById('root'));
		process.audio('audio_Quality').pause();
	},page8:function(){
		process.audio('audio_song').play();
		let content = <div>
				this is page 4<br/><a href='song.html' onClick={process.menu}>back</a>
			</div>;
			ReactDOM.render(content,document.getElementById('root'));
		process.audio('audio_song').pause();
	},
	loading:function(){
		let content = <div>
					<div className="progressbar-infinite color-multi"></div>
					<audio id="audio">
						<source src="audio/song.mp3" type="audio/mp3" />
					</audio>
					<div align='center'>
						<img src='img/psu.png' width='100px' />
					<center>	Loading...</center>
					</div>
				</div>;
		ReactDOM.render(content,document.getElementById('root'));
		process.audio('audio').play();
		process.replayAudio('audio');
	},
	audio:function(audio){
		let _audio = document.getElementById(audio);
		return _audio;
	},
	replayAudio:function(audio){
		process.audio(audio).addEventListener('ended',function(){
			process.audio('audio').pause();
			process.audio(audio).play();
		})
	}
}

let counting = 0;
process.loading();
setTimeout(function(){
	process.audio('audio').pause();
	process.menu();
},5000);