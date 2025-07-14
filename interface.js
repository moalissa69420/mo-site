document.addEventListener('DOMContentLoaded', function() {
  console.log('Interface.js loaded');
  
  const interfaceHover = document.querySelector('.interface-hover');
  if (!interfaceHover) {
    console.error('Interface hover element not found');
    return;
  }
  
  const interfacePanel = interfaceHover.querySelector('.interface-panel');
  const modal = document.getElementById('modal-overlay');
  
  if (!interfacePanel) {
    console.error('Interface panel not found');
    return;
  }
  
  if (!modal) {
    console.error('Modal overlay not found');
    return;
  }

  let panelLocked = false;

  function showPanel() {
    if (!panelLocked) {
      interfacePanel.style.display = 'block';
      console.log('Panel shown');
    }
  }
  
  function hidePanel() {
    if (!panelLocked) {
      interfacePanel.style.display = 'none';
      console.log('Panel hidden');
    }
  }
  
  function lockPanel() {
    panelLocked = true;
    interfacePanel.style.display = 'block';
    interfacePanel.classList.add('locked');
    console.log('Panel locked');
  }
  
  function unlockPanel() {
    panelLocked = false;
    interfacePanel.style.display = 'none';
    interfacePanel.classList.remove('locked');
    console.log('Panel unlocked');
  }

  // Panel hover events
  interfaceHover.addEventListener('mouseenter', showPanel);
  interfaceHover.addEventListener('mouseleave', hidePanel);
  
  // Panel click to lock
  interfaceHover.addEventListener('click', function(e) {
    if (!panelLocked && !e.target.closest('.modal-overlay')) {
      lockPanel();
      e.stopPropagation();
    }
  });

  // Close panel on outside click or Esc
  document.addEventListener('mousedown', function(e) {
    if (panelLocked && !interfaceHover.contains(e.target)) {
      unlockPanel();
    }
  });
  
  document.addEventListener('keydown', function(e) {
    if (panelLocked && (e.key === 'Escape' || e.key === 'Esc')) {
      unlockPanel();
    }
  });

  // Modal functionality
  const steps = interfacePanel.querySelectorAll('.interface-step');
  const modalContent = modal.querySelector('.modal-content');
  const modalMedia = modal.querySelector('.modal-media');
  const modalCaption = modal.querySelector('.modal-caption');
  const closeBtn = modal.querySelector('.modal-close');

  console.log('Found', steps.length, 'interface steps');

  function openModal(type, src, caption) {
    console.log('Opening modal:', type, src, caption);
    
    // Clear previous content
    modalMedia.innerHTML = '';
    
    if (type === 'video') {
      const vid = document.createElement('video');
      vid.src = src;
      vid.controls = true;
      vid.autoplay = true;
      vid.loop = true;
      vid.playsInline = true;
      vid.style.background = '#fff';
      vid.style.maxWidth = '100%';
      vid.style.maxHeight = '80vh';
      
      vid.addEventListener('error', function(e) {
        console.error('Video error:', e);
        modalMedia.innerHTML = '<div style="padding: 20px; color: #666;">Video could not be loaded</div>';
      });
      
      vid.addEventListener('loadeddata', function() {
        console.log('Video loaded successfully:', src);
      });
      
      modalMedia.appendChild(vid);
      
    } else if (type === 'image') {
      const img = document.createElement('img');
      img.src = src;
      img.alt = '';
      img.style.maxWidth = '100%';
      img.style.maxHeight = '80vh';
      
      img.addEventListener('error', function(e) {
        console.error('Image error:', e);
        modalMedia.innerHTML = '<div style="padding: 20px; color: #666;">Image could not be loaded</div>';
      });
      
      img.addEventListener('load', function() {
        console.log('Image loaded successfully:', src);
      });
      
      modalMedia.appendChild(img);
    }
    
    modalCaption.textContent = caption;
    modal.style.display = 'flex';
    
    console.log('Modal opened, display:', modal.style.display);
  }

  function closeModal() {
    modal.style.display = 'none';
    modalMedia.innerHTML = '';
    modalCaption.textContent = '';
    console.log('Modal closed');
  }

  // Add click handlers to each step
  steps.forEach((step, idx) => {
    console.log('Setting up step', idx);
    
    step.addEventListener('click', function(e) {
      e.stopPropagation();
      console.log('Step clicked:', idx);
      
      const type = step.getAttribute('data-type');
      const src = step.getAttribute('data-media');
      const caption = step.getAttribute('data-caption');
      
      console.log('Step data:', { type, src, caption });
      openModal(type, src, caption);
    });
    
    // Also add click to thumbnail
    const thumb = step.querySelector('.step-thumb');
    if (thumb) {
      thumb.style.pointerEvents = 'auto';
      thumb.addEventListener('click', function(e) {
        e.stopPropagation();
        console.log('Thumbnail clicked:', idx);
        
        const type = step.getAttribute('data-type');
        const src = step.getAttribute('data-media');
        const caption = step.getAttribute('data-caption');
        
        openModal(type, src, caption);
      });
    }
  });

  // Close modal events
  if (closeBtn) {
    closeBtn.addEventListener('click', function(e) {
      e.stopPropagation();
      closeModal();
    });
  }

  modal.addEventListener('mousedown', function(e) {
    if (e.target === modal) {
      closeModal();
    }
  });

  document.addEventListener('keydown', function(e) {
    if (modal.style.display !== 'none' && (e.key === 'Escape' || e.key === 'Esc')) {
      closeModal();
    }
  });
  
  console.log('Interface.js setup complete');
}); 