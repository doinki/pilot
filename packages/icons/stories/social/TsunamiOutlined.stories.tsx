import type { Meta, StoryObj } from '@storybook/react';

import TsunamiOutlined from '../../lib/social/TsunamiOutlined';

const meta: Meta<typeof TsunamiOutlined> = {
  component: TsunamiOutlined,
  tags: ['autodocs'],
  title: 'social/TsunamiOutlined',
};

export default meta;
type Story = StoryObj<typeof TsunamiOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
