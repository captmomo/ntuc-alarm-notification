// Copyright 2017 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
'use strict';
const postalCode = document.getElementById('postal');
const addressField = document.getElementById('address');
function setAlarm(event) {
  let minutes = parseFloat(event.target.value);
  let zip = postalCode.value 
  ? postalCode.value
  : 238823;
  let address = addressField.value
  ? addressField.value
  : '35 Orchard Rd';
  chrome.browserAction.setBadgeText({text: 'ON'});
  chrome.alarms.create({delayInMinutes: minutes});
  chrome.storage.sync.set({minutes: minutes});
  chrome.storage.sync.set({zip: zip});
  chrome.storage.sync.set({address: address});
  window.close();
}

function clearAlarm() {
  chrome.browserAction.setBadgeText({text: ''});
  chrome.alarms.clearAll();
  window.close();
}

//An Alarm delay of less than the minimum 1 minute will fire
// in approximately 1 minute incriments if released
document.getElementById('sampleSecond').addEventListener('click', setAlarm);
document.getElementById('15min').addEventListener('click', setAlarm);
document.getElementById('30min').addEventListener('click', setAlarm);
document.getElementById('cancelAlarm').addEventListener('click', clearAlarm);
