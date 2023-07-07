import type { Meta, StoryObj } from '@storybook/react';

import DryCleaningOutlined from '../../lib/maps/DryCleaningOutlined';

const meta: Meta<typeof DryCleaningOutlined> = {
  component: DryCleaningOutlined,
  tags: ['autodocs'],
  title: 'maps/DryCleaningOutlined',
};

export default meta;
type Story = StoryObj<typeof DryCleaningOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
