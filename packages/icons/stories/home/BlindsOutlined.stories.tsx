import type { Meta, StoryObj } from '@storybook/react';

import BlindsOutlined from '../../lib/home/BlindsOutlined';

const meta: Meta<typeof BlindsOutlined> = {
  component: BlindsOutlined,
  tags: ['autodocs'],
  title: 'home/BlindsOutlined',
};

export default meta;
type Story = StoryObj<typeof BlindsOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
