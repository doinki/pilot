import type { Meta, StoryObj } from '@storybook/react';

import AttractionsOutlined from '../../lib/maps/AttractionsOutlined';

const meta: Meta<typeof AttractionsOutlined> = {
  component: AttractionsOutlined,
  tags: ['autodocs'],
  title: 'maps/AttractionsOutlined',
};

export default meta;
type Story = StoryObj<typeof AttractionsOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
