import type { Meta, StoryObj } from '@storybook/react';

import PetsOutlined from '../../lib/action/PetsOutlined';

const meta: Meta<typeof PetsOutlined> = {
  component: PetsOutlined,
  tags: ['autodocs'],
  title: 'action/PetsOutlined',
};

export default meta;
type Story = StoryObj<typeof PetsOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
