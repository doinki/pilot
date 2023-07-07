import type { Meta, StoryObj } from '@storybook/react';

import SpaOutlined from '../../lib/places/SpaOutlined';

const meta: Meta<typeof SpaOutlined> = {
  component: SpaOutlined,
  tags: ['autodocs'],
  title: 'places/SpaOutlined',
};

export default meta;
type Story = StoryObj<typeof SpaOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
