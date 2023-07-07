import type { Meta, StoryObj } from '@storybook/react';

import TransitEnterexitOutlined from '../../lib/maps/TransitEnterexitOutlined';

const meta: Meta<typeof TransitEnterexitOutlined> = {
  component: TransitEnterexitOutlined,
  tags: ['autodocs'],
  title: 'maps/TransitEnterexitOutlined',
};

export default meta;
type Story = StoryObj<typeof TransitEnterexitOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
