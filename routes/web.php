<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::get('/productos', function () {
    return view('productos');
});
Route::get('/contacto', function () {
    return view('contacto');
});
Route::get('/especificacion', function () {
    return view('especificacion');
});


// routes/web.php
use App\Http\Controllers\ProductoController;

Route::get('/api/productos', [ProductoController::class, 'index']);
