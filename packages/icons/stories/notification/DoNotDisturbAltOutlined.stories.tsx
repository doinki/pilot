import type { Meta, StoryObj } from '@storybook/react';

import DoNotDisturbAltOutlined from '../../lib/notification/DoNotDisturbAltOutlined';

const meta: Meta<typeof DoNotDisturbAltOutlined> = {
  component: DoNotDisturbAltOutlined,
  tags: ['autodocs'],
  title: 'notification/DoNotDisturbAltOutlined',
};

export default meta;
type Story = StoryObj<typeof DoNotDisturbAltOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
