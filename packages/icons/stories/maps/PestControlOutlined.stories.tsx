import type { Meta, StoryObj } from '@storybook/react';

import PestControlOutlined from '../../lib/maps/PestControlOutlined';

const meta: Meta<typeof PestControlOutlined> = {
  component: PestControlOutlined,
  tags: ['autodocs'],
  title: 'maps/PestControlOutlined',
};

export default meta;
type Story = StoryObj<typeof PestControlOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
