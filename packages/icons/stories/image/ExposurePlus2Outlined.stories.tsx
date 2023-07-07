import type { Meta, StoryObj } from '@storybook/react';

import ExposurePlus2Outlined from '../../lib/image/ExposurePlus2Outlined';

const meta: Meta<typeof ExposurePlus2Outlined> = {
  component: ExposurePlus2Outlined,
  tags: ['autodocs'],
  title: 'image/ExposurePlus2Outlined',
};

export default meta;
type Story = StoryObj<typeof ExposurePlus2Outlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
