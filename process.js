// <video width="320" height="240" controls>
//   <source src="movie.mp4" type="video/mp4">
//   <source src="movie.ogg" type="video/ogg">
//   Your browser does not support the video tag.
// </video>

let process = {
	menu:function(){
	let source_vid = '#';
		let content = <div>
		    <iframe src={source_vid} width="100%" height='300px'/>
			<audio id="audio_song">
				<source src="audio/song.mp3" type="audio/mp3" />
			</audio>
			<center>
				<h1><a href='front.html' onClick={process.page1}>PSU</a></h1>
				<h1><a href='history.html' onClick={process.page2}>History</a></h1>
				<h1><a href='history1.html' onClick={process.page3}>Presidents of PSU</a></h1>
				<h1><a href='vision.html' onClick={process.page4}>Vision</a></h1>
				<h1><a href='mission.html' onClick={process.page5}>Mission</a></h1>
				<h1><a href='core.html' onClick={process.page6}>Core Values</a></h1>
				<h1><a href='Quality.html' onClick={process.page7}>Quality Policy</a></h1>
				<h1><a href='song.html' onClick={process.page8}>PSU Hymn</a></h1>
			</center>
		</div>;
		ReactDOM.render(content,document.getElementById('root'));
	},
	page1:function(){
		process.audio('audio_bomb').play();
		let content = <div>
				this is page 1<br/><a href='front.html' onClick={process.front}>back</a>
			</div>;
			ReactDOM.render(content,document.getElementById('root'));
		process.audio('audio_bomb').pause();
	},
	page2:function(){
		process.audio('audio_History').play();
		let content = <div>
				this is page 2<br/><a href='history.html' onClick={process.History}>back</a>
			</div>;

			ReactDOM.render(content,document.getElementById('root'));
		process.audio('audio_History').pause();
	},
	page3:function(){
		process.audio('audio_History1').play();
		let content = <div>
				this is page 3<br/><a href='history1.html' onClick={process.history1}>back</a>
			</div>;
			ReactDOM.render(content,document.getElementById('root'));
		process.audio('audio_History1').pause();
	},
	page4:function(){
		process.audio('audio_Vision').play();
		let content = <div>
				this is page 4<br/><a href='vision.html' onClick={process.vision}>back</a>
			</div>;
			ReactDOM.render(content,document.getElementById('root'));
		process.audio('audio_Vision').pause();
	},
	page5:function(){
		process.audio('audio_Mission').play();
		let content = <div>
				this is page 4<br/><a href='mission.html' onClick={process.mission}>back</a>
			</div>;
			ReactDOM.render(content,document.getElementById('root'));
		process.audio('audio_Mission').pause();
	},
	page6:function(){
		process.audio('audio_Core').play();
		let content = <div>
				this is page 4<br/><a href='core.html' onClick={process.core}>back</a>
			</div>;
			ReactDOM.render(content,document.getElementById('root'));
		process.audio('audio_Core').pause();
	},
	page7:function(){
		process.audio('audio_Quality').play();
		let content = <div>
				this is page 4<br/><a href='Quality.html' onClick={process.Quality}>back</a>
			</div>;
			ReactDOM.render(content,document.getElementById('root'));
		process.audio('audio_Quality').pause();
	},page8:function(){
		process.audio('audio_song').play();
		let content = <div>
				this is page 4<br/><a href='song.html' onClick={process.song}>back</a>
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
						<img src='img/psu.png' width='300px' />
						<center>Loading...</center>
					</div>
				</div>;
		ReactDOM.render(content,document.getElementById('root'));
		
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