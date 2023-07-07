import type { Meta, StoryObj } from '@storybook/react';

import Timer3SelectOutlined from '../../lib/device/Timer3SelectOutlined';

const meta: Meta<typeof Timer3SelectOutlined> = {
  component: Timer3SelectOutlined,
  tags: ['autodocs'],
  title: 'device/Timer3SelectOutlined',
};

export default meta;
type Story = StoryObj<typeof Timer3SelectOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
