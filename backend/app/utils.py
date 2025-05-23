import json
import os
from django.conf import settings


def load_admin_data_JSON():
    #settings.BASE_DIR đường dẫn tuyệt đối(backend/data/admin.json)
    file_path = os.path.join(settings.BASE_DIR, 'data', 'admin.json') 
    try:
        with open(file_path, 'r') as f:
            return json.load(f)
    except FileNotFoundError:
        return []
    except json.JSONDecodeError:
        return []
def load_player_data_JSON():
    file_path = os.path.join(settings.BASE_DIR, 'data', 'player.json')
    try:
        with open(file_path, 'r') as file:
            return json.load(file)
    except FileNotFoundError:
        return []  # Trả về danh sách rỗng nếu file không tồn tại
    except json.JSONDecodeError:
        return []