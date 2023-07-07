import type { Meta, StoryObj } from '@storybook/react';

import WashOutlined from '../../lib/places/WashOutlined';

const meta: Meta<typeof WashOutlined> = {
  component: WashOutlined,
  tags: ['autodocs'],
  title: 'places/WashOutlined',
};

export default meta;
type Story = StoryObj<typeof WashOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
