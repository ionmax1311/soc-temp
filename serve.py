#!/usr/bin/env python3
"""
Simple HTTP Server for static files
Serves files from current directory on port 3000
"""
import http.server
import socketserver
import os
import signal
import sys

PORT = 3000
DIRECTORY = os.path.dirname(os.path.abspath(__file__))

class ReuseAddrTCPServer(socketserver.TCPServer):
    allow_reuse_address = True

class MyHTTPRequestHandler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=DIRECTORY, **kwargs)
    
    def end_headers(self):
        # Add CORS headers
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
        self.send_header('Access-Control-Allow-Headers', 'Content-Type')
        # Disable caching
        self.send_header('Cache-Control', 'no-store, no-cache, must-revalidate, max-age=0')
        self.send_header('Pragma', 'no-cache')
        self.send_header('Expires', '0')
        super().end_headers()
    
    def log_message(self, format, *args):
        # Custom logging
        print(f"[HTTP] {self.address_string()} - {format % args}")

def signal_handler(sig, frame):
    print('\n🛑 Остановка сервера...')
    sys.exit(0)

if __name__ == '__main__':
    signal.signal(signal.SIGINT, signal_handler)
    signal.signal(signal.SIGTERM, signal_handler)
    
    with ReuseAddrTCPServer(("0.0.0.0", PORT), MyHTTPRequestHandler) as httpd:
        print(f"🚀 Статический HTTP сервер запущен!")
        print(f"📁 Директория: {DIRECTORY}")
        print(f"🌐 Адрес: http://localhost:{PORT}")
        print(f"⏹️  Нажмите Ctrl+C для остановки\n")
        
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print('\n🛑 Сервер остановлен')
            sys.exit(0)
