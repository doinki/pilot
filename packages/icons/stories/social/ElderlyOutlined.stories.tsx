import type { Meta, StoryObj } from '@storybook/react';

import ElderlyOutlined from '../../lib/social/ElderlyOutlined';

const meta: Meta<typeof ElderlyOutlined> = {
  component: ElderlyOutlined,
  tags: ['autodocs'],
  title: 'social/ElderlyOutlined',
};

export default meta;
type Story = StoryObj<typeof ElderlyOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
