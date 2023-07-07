import type { Meta, StoryObj } from '@storybook/react';

import CameraIndoorOutlined from '../../lib/search/CameraIndoorOutlined';

const meta: Meta<typeof CameraIndoorOutlined> = {
  component: CameraIndoorOutlined,
  tags: ['autodocs'],
  title: 'search/CameraIndoorOutlined',
};

export default meta;
type Story = StoryObj<typeof CameraIndoorOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
