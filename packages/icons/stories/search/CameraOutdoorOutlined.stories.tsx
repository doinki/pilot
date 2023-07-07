import type { Meta, StoryObj } from '@storybook/react';

import CameraOutdoorOutlined from '../../lib/search/CameraOutdoorOutlined';

const meta: Meta<typeof CameraOutdoorOutlined> = {
  component: CameraOutdoorOutlined,
  tags: ['autodocs'],
  title: 'search/CameraOutdoorOutlined',
};

export default meta;
type Story = StoryObj<typeof CameraOutdoorOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
