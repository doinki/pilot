import type { Meta, StoryObj } from '@storybook/react';

import PestControlRodentOutlined from '../../lib/maps/PestControlRodentOutlined';

const meta: Meta<typeof PestControlRodentOutlined> = {
  component: PestControlRodentOutlined,
  tags: ['autodocs'],
  title: 'maps/PestControlRodentOutlined',
};

export default meta;
type Story = StoryObj<typeof PestControlRodentOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
