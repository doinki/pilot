import type { Meta, StoryObj } from '@storybook/react';

import DoDisturbAltOutlined from '../../lib/notification/DoDisturbAltOutlined';

const meta: Meta<typeof DoDisturbAltOutlined> = {
  component: DoDisturbAltOutlined,
  tags: ['autodocs'],
  title: 'notification/DoDisturbAltOutlined',
};

export default meta;
type Story = StoryObj<typeof DoDisturbAltOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
