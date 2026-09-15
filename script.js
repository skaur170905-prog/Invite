const envelope = document.getElementById('envelope');
const seal = document.getElementById('seal');
const opening = document.getElementById('opening');
const invite = document.getElementById('invite');
const openLabel = document.getElementById('openLabel');
const replay = document.getElementById('replay');
let isOpen = false;

function openInvitation(){
  if(isOpen) return;
  isOpen = true;
  envelope.classList.add('open');
  openLabel.textContent = 'opening your invitation…';
  setTimeout(()=>{
    opening.classList.add('gone');
    invite.classList.add('show');
    invite.setAttribute('aria-hidden','false');
  }, 1050);
}

function replayOpening(){
  invite.classList.remove('show');
  invite.setAttribute('aria-hidden','true');
  setTimeout(()=>{
    opening.classList.remove('gone');
    envelope.classList.remove('open');
    openLabel.textContent = 'tap the seal to open';
    isOpen = false;
  }, 650);
}

seal.addEventListener('click', e => { e.stopPropagation(); openInvitation(); });
openLabel.addEventListener('click', openInvitation);
envelope.addEventListener('click', openInvitation);
replay.addEventListener('click', replayOpening);
document.addEventListener('keydown', e => {
  if(e.key === 'Escape' && isOpen) replayOpening();
});
