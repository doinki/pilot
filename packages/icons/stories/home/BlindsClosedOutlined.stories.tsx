import type { Meta, StoryObj } from '@storybook/react';

import BlindsClosedOutlined from '../../lib/home/BlindsClosedOutlined';

const meta: Meta<typeof BlindsClosedOutlined> = {
  component: BlindsClosedOutlined,
  tags: ['autodocs'],
  title: 'home/BlindsClosedOutlined',
};

export default meta;
type Story = StoryObj<typeof BlindsClosedOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
