import type { Meta, StoryObj } from '@storybook/react';

import RadioOutlined from '../../lib/av/RadioOutlined';

const meta: Meta<typeof RadioOutlined> = {
  component: RadioOutlined,
  tags: ['autodocs'],
  title: 'av/RadioOutlined',
};

export default meta;
type Story = StoryObj<typeof RadioOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
