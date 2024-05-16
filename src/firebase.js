/*
 * MIT License
 *
 * Copyright (c) 2024 Mohamed Amine Zouaoui
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDV-eKOa3b9-fHx6AK1cymJFeiY2XMedYw",
  authDomain: "teamup-iss.firebaseapp.com",
  projectId: "teamup-iss",
  storageBucket: "teamup-iss.appspot.com",
  messagingSenderId: "766724414674",
  appId: "1:766724414674:web:77f5ef1486b5a768fd610b",
  measurementId: "G-B3M86J03YP"
};

export const app = initializeApp(firebaseConfig);


