import type { Meta, StoryObj } from '@storybook/react';

import ShowerOutlined from '../../lib/search/ShowerOutlined';

const meta: Meta<typeof ShowerOutlined> = {
  component: ShowerOutlined,
  tags: ['autodocs'],
  title: 'search/ShowerOutlined',
};

export default meta;
type Story = StoryObj<typeof ShowerOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
