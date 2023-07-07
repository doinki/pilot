import type { Meta, StoryObj } from '@storybook/react';

import ExposurePlus1Outlined from '../../lib/image/ExposurePlus1Outlined';

const meta: Meta<typeof ExposurePlus1Outlined> = {
  component: ExposurePlus1Outlined,
  tags: ['autodocs'],
  title: 'image/ExposurePlus1Outlined',
};

export default meta;
type Story = StoryObj<typeof ExposurePlus1Outlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
